import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Gauge, Fuel, Settings2, Users, Calendar, Shield, CheckCircle2, Heart, Share2, Phone, MessageCircle } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { vehicles } from '@/data/vehicles';
import { useState } from 'react';

const VehicleDetail = () => {
  const { id } = useParams<{ id: string }>();
  const vehicle = vehicles.find((v) => v.id === id);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!vehicle) {
    return (
      <div className="min-h-screen bg-gradient-dark flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl font-bold text-foreground mb-4">Vehicle Not Found</h1>
          <Button asChild>
            <Link to="/vehicles">Back to Inventory</Link>
          </Button>
        </div>
      </div>
    );
  }

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

  const specs = [
    { icon: Calendar, label: 'Year', value: vehicle.year.toString() },
    { icon: Gauge, label: 'Mileage', value: `${formatMileage(vehicle.mileage)} mi` },
    { icon: Fuel, label: 'Fuel Type', value: vehicle.fuelType },
    { icon: Settings2, label: 'Transmission', value: vehicle.transmission },
    { icon: Users, label: 'Previous Owners', value: vehicle.previousOwners.toString() },
    { icon: Shield, label: 'Condition', value: vehicle.condition },
  ];

  return (
    <div className="min-h-screen bg-gradient-dark">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <Link
            to="/vehicles"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Inventory
          </Link>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-card">
                <img
                  src={vehicle.images[selectedImage] || vehicle.image}
                  alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
                  className="h-full w-full object-cover"
                />
                <div className="absolute top-4 right-4 flex gap-2">
                  <button className="flex h-10 w-10 items-center justify-center rounded-full bg-card/80 backdrop-blur-sm text-muted-foreground hover:text-primary transition-colors">
                    <Heart className="h-5 w-5" />
                  </button>
                  <button className="flex h-10 w-10 items-center justify-center rounded-full bg-card/80 backdrop-blur-sm text-muted-foreground hover:text-primary transition-colors">
                    <Share2 className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Thumbnail Gallery */}
              {vehicle.images.length > 1 && (
                <div className="flex gap-3 overflow-x-auto pb-2">
                  {vehicle.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(idx)}
                      className={`relative aspect-[16/10] w-24 flex-shrink-0 overflow-hidden rounded-lg border-2 transition-all ${
                        selectedImage === idx ? 'border-primary' : 'border-transparent opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt={`View ${idx + 1}`} className="h-full w-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Vehicle Details */}
            <div className="space-y-6">
              {/* Header */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary">{vehicle.bodyType}</Badge>
                  <Badge className="bg-gradient-primary">{vehicle.condition}</Badge>
                </div>
                <h1 className="font-display text-4xl font-bold text-foreground mb-2">
                  {vehicle.year} {vehicle.make} {vehicle.model}
                </h1>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>{vehicle.location}</span>
                </div>
              </div>

              {/* Price */}
              <div className="rounded-xl bg-gradient-card border border-border p-6">
                <p className="text-sm text-muted-foreground mb-1">Listed Price</p>
                <p className="font-display text-4xl font-bold text-gradient-primary">
                  {formatPrice(vehicle.price)}
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Est. {formatPrice(Math.round(vehicle.price / 60))}/mo with financing
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="grid grid-cols-2 gap-4">
                <Button variant="hero" size="lg" className="gap-2">
                  <Phone className="h-5 w-5" />
                  Call Dealer
                </Button>
                <Button variant="outline" size="lg" className="gap-2">
                  <MessageCircle className="h-5 w-5" />
                  Message
                </Button>
              </div>

              {/* Specs Grid */}
              <div className="rounded-xl bg-card border border-border p-6">
                <h3 className="font-display font-semibold text-foreground mb-4">Specifications</h3>
                <div className="grid grid-cols-2 gap-4">
                  {specs.map((spec) => (
                    <div key={spec.label} className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
                        <spec.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{spec.label}</p>
                        <p className="font-medium text-foreground">{spec.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div className="rounded-xl bg-card border border-border p-6">
                <h3 className="font-display font-semibold text-foreground mb-4">Description</h3>
                <p className="text-muted-foreground leading-relaxed">{vehicle.description}</p>
              </div>

              {/* Features */}
              <div className="rounded-xl bg-card border border-border p-6">
                <h3 className="font-display font-semibold text-foreground mb-4">Key Features</h3>
                <div className="grid grid-cols-2 gap-3">
                  {vehicle.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default VehicleDetail;
