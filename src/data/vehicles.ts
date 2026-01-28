export interface Vehicle {
  id: string;
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  fuelType: 'Petrol' | 'Diesel' | 'Electric' | 'Hybrid';
  transmission: 'Automatic' | 'Manual';
  bodyType: 'Sedan' | 'SUV' | 'Hatchback' | 'Coupe' | 'Truck' | 'Van';
  color: string;
  image: string;
  images: string[];
  location: string;
  description: string;
  features: string[];
  condition: 'Excellent' | 'Good' | 'Fair';
  previousOwners: number;
}

export const vehicles: Vehicle[] = [
  {
    id: '1',
    make: 'BMW',
    model: 'M4 Competition',
    year: 2022,
    price: 72500,
    mileage: 15000,
    fuelType: 'Petrol',
    transmission: 'Automatic',
    bodyType: 'Coupe',
    color: 'Alpine White',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80',
      'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=800&q=80',
    ],
    location: 'Los Angeles, CA',
    description: 'Stunning BMW M4 Competition in pristine condition. Twin-turbo inline-6 producing 503 hp.',
    features: ['Carbon Fiber Roof', 'M Carbon Seats', 'Head-Up Display', 'Harman Kardon Sound'],
    condition: 'Excellent',
    previousOwners: 1,
  },
  {
    id: '2',
    make: 'Mercedes-Benz',
    model: 'AMG GT',
    year: 2021,
    price: 125000,
    mileage: 8500,
    fuelType: 'Petrol',
    transmission: 'Automatic',
    bodyType: 'Coupe',
    color: 'Obsidian Black',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80',
    ],
    location: 'Miami, FL',
    description: 'Breathtaking AMG GT with hand-built 4.0L V8 biturbo engine. Track-ready performance.',
    features: ['AMG Performance Exhaust', 'Burmester Sound', 'Night Package', 'Adaptive Suspension'],
    condition: 'Excellent',
    previousOwners: 1,
  },
  {
    id: '3',
    make: 'Porsche',
    model: '911 Carrera S',
    year: 2023,
    price: 145000,
    mileage: 3200,
    fuelType: 'Petrol',
    transmission: 'Automatic',
    bodyType: 'Coupe',
    color: 'Guards Red',
    image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=800&q=80',
    ],
    location: 'San Francisco, CA',
    description: 'Iconic 911 Carrera S with PDK transmission. The benchmark sports car.',
    features: ['Sport Chrono Package', 'PASM', 'Bose Surround', 'Sport Exhaust'],
    condition: 'Excellent',
    previousOwners: 1,
  },
  {
    id: '4',
    make: 'Tesla',
    model: 'Model S Plaid',
    year: 2023,
    price: 89000,
    mileage: 12000,
    fuelType: 'Electric',
    transmission: 'Automatic',
    bodyType: 'Sedan',
    color: 'Pearl White',
    image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80',
    ],
    location: 'Seattle, WA',
    description: 'The fastest accelerating production car. 0-60 in under 2 seconds.',
    features: ['Full Self-Driving', 'Yoke Steering', '17" Display', 'Premium Audio'],
    condition: 'Excellent',
    previousOwners: 1,
  },
  {
    id: '5',
    make: 'Audi',
    model: 'RS7 Sportback',
    year: 2022,
    price: 98000,
    mileage: 18000,
    fuelType: 'Petrol',
    transmission: 'Automatic',
    bodyType: 'Sedan',
    color: 'Nardo Gray',
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80',
    ],
    location: 'New York, NY',
    description: 'The ultimate grand tourer. 591 hp twin-turbo V8 with quattro AWD.',
    features: ['Matrix LED Lights', 'Bang & Olufsen 3D', 'RS Sport Suspension', 'Carbon Package'],
    condition: 'Excellent',
    previousOwners: 1,
  },
  {
    id: '6',
    make: 'Range Rover',
    model: 'Sport SVR',
    year: 2022,
    price: 115000,
    mileage: 22000,
    fuelType: 'Petrol',
    transmission: 'Automatic',
    bodyType: 'SUV',
    color: 'Santorini Black',
    image: 'https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=800&q=80',
    ],
    location: 'Chicago, IL',
    description: 'The most powerful Range Rover Sport ever. Supercharged V8 performance.',
    features: ['SVR Seats', 'Meridian Signature', 'Panoramic Roof', 'Terrain Response 2'],
    condition: 'Good',
    previousOwners: 2,
  },
  {
    id: '7',
    make: 'Ford',
    model: 'Mustang GT',
    year: 2021,
    price: 45000,
    mileage: 25000,
    fuelType: 'Petrol',
    transmission: 'Manual',
    bodyType: 'Coupe',
    color: 'Grabber Blue',
    image: 'https://images.unsplash.com/photo-1584345604476-8ec5f82bd3dc?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1584345604476-8ec5f82bd3dc?w=800&q=80',
    ],
    location: 'Dallas, TX',
    description: 'American muscle at its finest. 5.0L V8 with 460 hp.',
    features: ['Performance Package', 'Recaro Seats', 'Active Exhaust', 'MagneRide'],
    condition: 'Good',
    previousOwners: 1,
  },
  {
    id: '8',
    make: 'Lexus',
    model: 'LC 500',
    year: 2022,
    price: 82000,
    mileage: 11000,
    fuelType: 'Petrol',
    transmission: 'Automatic',
    bodyType: 'Coupe',
    color: 'Infrared',
    image: 'https://images.unsplash.com/photo-1621993202323-f438eec934ff?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1621993202323-f438eec934ff?w=800&q=80',
    ],
    location: 'Phoenix, AZ',
    description: 'Stunning Japanese grand tourer. Naturally aspirated 5.0L V8.',
    features: ['Mark Levinson Audio', 'Adaptive Suspension', 'LDH Rear Steering', 'Carbon Roof'],
    condition: 'Excellent',
    previousOwners: 1,
  },
];

export const makes = [...new Set(vehicles.map(v => v.make))];
export const bodyTypes = [...new Set(vehicles.map(v => v.bodyType))];
export const fuelTypes = [...new Set(vehicles.map(v => v.fuelType))];
export const transmissions = [...new Set(vehicles.map(v => v.transmission))];
