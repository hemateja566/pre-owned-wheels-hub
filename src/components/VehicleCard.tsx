import { Link } from 'react-router-dom';
import { MapPin, Gauge, Fuel, Settings2 } from 'lucide-react';
import { Vehicle } from '@/data/vehicles';
import { Badge } from '@/components/ui/badge';

interface VehicleCardProps {
  vehicle: Vehicle;
}

export const VehicleCard = ({ vehicle }: VehicleCardProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(price);
  };

  const formatMileage = (mileage: number) => {
    return new Intl.NumberFormat('en-US').format(mileage);
  };

  return (
    <Link to={`/vehicle/${vehicle.id}`} className="group block">
      <div className="relative overflow-hidden rounded-xl bg-gradient-card shadow-card transition-all duration-500 hover:shadow-elevated hover:-translate-y-2">
        {/* Image Container */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={vehicle.image}
            alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
          
          {/* Badges */}
          <div className="absolute top-4 left-4 flex gap-2">
            <Badge variant="secondary" className="bg-card/80 backdrop-blur-sm">
              {vehicle.condition}
            </Badge>
            {vehicle.fuelType === 'Electric' && (
              <Badge className="bg-gradient-primary">
                Electric
              </Badge>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Title & Price */}
          <div className="mb-3 flex items-start justify-between">
            <div>
              <p className="text-sm text-muted-foreground">{vehicle.year}</p>
              <h3 className="font-display text-xl font-bold text-foreground">
                {vehicle.make} {vehicle.model}
              </h3>
            </div>
            <p className="font-display text-xl font-bold text-gradient-primary">
              {formatPrice(vehicle.price)}
            </p>
          </div>

          {/* Specs Grid */}
          <div className="mb-4 grid grid-cols-2 gap-3">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Gauge className="h-4 w-4 text-primary" />
              <span>{formatMileage(vehicle.mileage)} mi</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Fuel className="h-4 w-4 text-primary" />
              <span>{vehicle.fuelType}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Settings2 className="h-4 w-4 text-primary" />
              <span>{vehicle.transmission}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary" />
              <span>{vehicle.location.split(',')[0]}</span>
            </div>
          </div>

          {/* CTA */}
          <div className="flex items-center justify-between border-t border-border pt-4">
            <span className="text-sm text-muted-foreground">
              {vehicle.previousOwners} previous owner{vehicle.previousOwners > 1 ? 's' : ''}
            </span>
            <span className="font-medium text-primary transition-all group-hover:translate-x-1">
              View Details →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};
