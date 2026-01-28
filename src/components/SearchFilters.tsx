import { useState } from 'react';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { makes, bodyTypes, fuelTypes, transmissions } from '@/data/vehicles';

interface SearchFiltersProps {
  onFiltersChange: (filters: FilterState) => void;
  compact?: boolean;
}

export interface FilterState {
  search: string;
  make: string;
  bodyType: string;
  fuelType: string;
  transmission: string;
  priceRange: [number, number];
  mileageRange: [number, number];
}

const initialFilters: FilterState = {
  search: '',
  make: 'all',
  bodyType: 'all',
  fuelType: 'all',
  transmission: 'all',
  priceRange: [0, 200000],
  mileageRange: [0, 100000],
};

export const SearchFilters = ({ onFiltersChange, compact = false }: SearchFiltersProps) => {
  const [filters, setFilters] = useState<FilterState>(initialFilters);
  const [showFilters, setShowFilters] = useState(!compact);

  const updateFilter = <K extends keyof FilterState>(key: K, value: FilterState[K]) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFiltersChange(newFilters);
  };

  const resetFilters = () => {
    setFilters(initialFilters);
    onFiltersChange(initialFilters);
  };

  const formatPrice = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="space-y-4">
      {/* Search Bar */}
      <div className="flex gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search make, model, or keyword..."
            value={filters.search}
            onChange={(e) => updateFilter('search', e.target.value)}
            className="h-12 pl-12 bg-card border-border"
          />
        </div>
        {compact && (
          <Button
            variant={showFilters ? 'default' : 'outline'}
            size="lg"
            onClick={() => setShowFilters(!showFilters)}
            className="gap-2"
          >
            <SlidersHorizontal className="h-5 w-5" />
            Filters
          </Button>
        )}
      </div>

      {/* Filter Options */}
      {showFilters && (
        <div className="rounded-xl bg-card p-6 border border-border animate-fade-in">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-display font-semibold text-foreground">Filters</h3>
            <Button variant="ghost" size="sm" onClick={resetFilters} className="gap-2">
              <X className="h-4 w-4" />
              Reset All
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* Make */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">Make</label>
              <Select value={filters.make} onValueChange={(v) => updateFilter('make', v)}>
                <SelectTrigger className="bg-secondary border-border">
                  <SelectValue placeholder="All Makes" />
                </SelectTrigger>
                <SelectContent className="bg-card border-border">
                  <SelectItem value="all">All Makes</SelectItem>
                  {makes.map((make) => (
                    <SelectItem key={make} value={make}>
                      {make}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Body Type */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">Body Type</label>
              <Select value={filters.bodyType} onValueChange={(v) => updateFilter('bodyType', v)}>
                <SelectTrigger className="bg-secondary border-border">
                  <SelectValue placeholder="All Types" />
                </SelectTrigger>
                <SelectContent className="bg-card border-border">
                  <SelectItem value="all">All Types</SelectItem>
                  {bodyTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Fuel Type */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">Fuel Type</label>
              <Select value={filters.fuelType} onValueChange={(v) => updateFilter('fuelType', v)}>
                <SelectTrigger className="bg-secondary border-border">
                  <SelectValue placeholder="All Fuels" />
                </SelectTrigger>
                <SelectContent className="bg-card border-border">
                  <SelectItem value="all">All Fuels</SelectItem>
                  {fuelTypes.map((fuel) => (
                    <SelectItem key={fuel} value={fuel}>
                      {fuel}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Transmission */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">Transmission</label>
              <Select value={filters.transmission} onValueChange={(v) => updateFilter('transmission', v)}>
                <SelectTrigger className="bg-secondary border-border">
                  <SelectValue placeholder="All Types" />
                </SelectTrigger>
                <SelectContent className="bg-card border-border">
                  <SelectItem value="all">All Types</SelectItem>
                  {transmissions.map((trans) => (
                    <SelectItem key={trans} value={trans}>
                      {trans}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Price Range */}
          <div className="mt-6 space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-muted-foreground">Price Range</label>
              <span className="text-sm text-foreground">
                {formatPrice(filters.priceRange[0])} - {formatPrice(filters.priceRange[1])}
              </span>
            </div>
            <Slider
              value={filters.priceRange}
              onValueChange={(v) => updateFilter('priceRange', v as [number, number])}
              min={0}
              max={200000}
              step={5000}
              className="[&_[role=slider]]:bg-primary"
            />
          </div>

          {/* Mileage Range */}
          <div className="mt-6 space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-muted-foreground">Mileage</label>
              <span className="text-sm text-foreground">
                {filters.mileageRange[0].toLocaleString()} - {filters.mileageRange[1].toLocaleString()} mi
              </span>
            </div>
            <Slider
              value={filters.mileageRange}
              onValueChange={(v) => updateFilter('mileageRange', v as [number, number])}
              min={0}
              max={100000}
              step={5000}
              className="[&_[role=slider]]:bg-primary"
            />
          </div>
        </div>
      )}
    </div>
  );
};
