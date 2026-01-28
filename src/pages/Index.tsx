import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Truck, Award, ChevronRight } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { VehicleCard } from '@/components/VehicleCard';
import { SearchFilters, FilterState } from '@/components/SearchFilters';
import { Button } from '@/components/ui/button';
import { vehicles } from '@/data/vehicles';
import heroCarImage from '@/assets/hero-car.jpg';

const Index = () => {
  const [filters, setFilters] = useState<FilterState>({
    search: '',
    make: 'all',
    bodyType: 'all',
    fuelType: 'all',
    transmission: 'all',
    priceRange: [0, 200000],
    mileageRange: [0, 100000],
  });

  const featuredVehicles = vehicles.slice(0, 6);

  const stats = [
    { value: '10,000+', label: 'Vehicles Sold' },
    { value: '98%', label: 'Customer Satisfaction' },
    { value: '150+', label: 'Premium Brands' },
    { value: '24/7', label: 'Customer Support' },
  ];

  const features = [
    {
      icon: Shield,
      title: '150-Point Inspection',
      description: 'Every vehicle undergoes a rigorous multi-point quality inspection.',
    },
    {
      icon: Truck,
      title: 'Free Nationwide Delivery',
      description: 'We deliver your dream car right to your doorstep, completely free.',
    },
    {
      icon: Award,
      title: '7-Day Money Back',
      description: "Not satisfied? Return your vehicle within 7 days, no questions asked.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-dark">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroCarImage}
            alt="Luxury sports car"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
        </div>

        <div className="container relative mx-auto px-4 py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-primary mb-6 animate-fade-in">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              Trusted by 50,000+ car enthusiasts
            </div>

            <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground mb-6 animate-slide-up">
              Find Your Perfect
              <span className="block text-gradient-primary">Pre-Owned Ride</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Discover certified pre-owned vehicles from premium brands. Every car inspected, every drive confident.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <Button variant="hero" size="xl" asChild>
                <Link to="/vehicles">
                  Browse Inventory
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="glass" size="xl">
                Sell Your Car
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-8 border-t border-border/50 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-3xl font-bold text-gradient-primary">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="font-display text-3xl font-bold text-foreground mb-3">
              Search Our Inventory
            </h2>
            <p className="text-muted-foreground">
              Find your dream car from our curated collection of premium vehicles
            </p>
          </div>
          <SearchFilters onFiltersChange={setFilters} />
        </div>
      </section>

      {/* Featured Vehicles */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-primary font-medium mb-2">FEATURED VEHICLES</p>
              <h2 className="font-display text-4xl font-bold text-foreground">
                Handpicked For You
              </h2>
            </div>
            <Button variant="ghost" asChild className="hidden md:flex">
              <Link to="/vehicles">
                View All Vehicles
                <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredVehicles.map((vehicle) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>

          <div className="mt-10 text-center md:hidden">
            <Button variant="outline" asChild>
              <Link to="/vehicles">
                View All Vehicles
                <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-2">WHY CHOOSE US</p>
            <h2 className="font-display text-4xl font-bold text-foreground mb-4">
              The AutoVault Difference
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're not just selling cars — we're building trust. Every vehicle in our inventory meets our rigorous standards.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group relative rounded-2xl bg-gradient-card p-8 border border-border transition-all duration-300 hover:border-primary/50 hover:shadow-glow"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-primary mb-6">
                  <feature.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-card border border-border p-12 md:p-16">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
              <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-primary blur-3xl" />
              <div className="absolute bottom-1/4 right-1/3 w-48 h-48 rounded-full bg-accent blur-3xl" />
            </div>
            
            <div className="relative max-w-2xl">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                Ready to Find Your
                <span className="text-gradient-primary"> Dream Car?</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join thousands of satisfied customers who found their perfect ride through AutoVault. Start your journey today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/vehicles">
                    Start Browsing
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg">
                  Get Pre-Approved
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
