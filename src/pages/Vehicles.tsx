import { useState, useMemo } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { VehicleCard } from '@/components/VehicleCard';
import { SearchFilters, FilterState } from '@/components/SearchFilters';
import { vehicles } from '@/data/vehicles';

const Vehicles = () => {
  const [filters, setFilters] = useState<FilterState>({
    search: '',
    make: 'all',
    bodyType: 'all',
    fuelType: 'all',
    transmission: 'all',
    priceRange: [0, 200000],
    mileageRange: [0, 100000],
  });

  const filteredVehicles = useMemo(() => {
    return vehicles.filter((vehicle) => {
      const matchesSearch =
        filters.search === '' ||
        vehicle.make.toLowerCase().includes(filters.search.toLowerCase()) ||
        vehicle.model.toLowerCase().includes(filters.search.toLowerCase()) ||
        vehicle.description.toLowerCase().includes(filters.search.toLowerCase());

      const matchesMake = filters.make === 'all' || vehicle.make === filters.make;
      const matchesBodyType = filters.bodyType === 'all' || vehicle.bodyType === filters.bodyType;
      const matchesFuelType = filters.fuelType === 'all' || vehicle.fuelType === filters.fuelType;
      const matchesTransmission = filters.transmission === 'all' || vehicle.transmission === filters.transmission;
      const matchesPrice = vehicle.price >= filters.priceRange[0] && vehicle.price <= filters.priceRange[1];
      const matchesMileage = vehicle.mileage >= filters.mileageRange[0] && vehicle.mileage <= filters.mileageRange[1];

      return matchesSearch && matchesMake && matchesBodyType && matchesFuelType && matchesTransmission && matchesPrice && matchesMileage;
    });
  }, [filters]);

  return (
    <div className="min-h-screen bg-gradient-dark">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="font-display text-4xl font-bold text-foreground mb-3">
              Browse Our Inventory
            </h1>
            <p className="text-muted-foreground">
              Explore our curated collection of certified pre-owned vehicles
            </p>
          </div>

          {/* Filters */}
          <div className="mb-8">
            <SearchFilters onFiltersChange={setFilters} compact />
          </div>

          {/* Results Count */}
          <div className="mb-6 flex items-center justify-between">
            <p className="text-muted-foreground">
              Showing <span className="text-foreground font-medium">{filteredVehicles.length}</span> vehicles
            </p>
          </div>

          {/* Vehicle Grid */}
          {filteredVehicles.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredVehicles.map((vehicle) => (
                <VehicleCard key={vehicle.id} vehicle={vehicle} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
                No vehicles found
              </h3>
              <p className="text-muted-foreground">
                Try adjusting your filters to see more results
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Vehicles;
