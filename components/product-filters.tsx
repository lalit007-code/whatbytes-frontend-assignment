"use client";

import { useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { useFilterStore } from "@/lib/store";
import { categories } from "@/lib/products";
import type { FilterState } from "@/lib/store";

export function ProductFilters() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { filters, setCategory, setPriceRange } = useFilterStore();

  // Normalize category strings
  const normalize = (str: string) => str.trim().toLowerCase();

  // Sync URL params with store on mount
  useEffect(() => {
    const categoryParam = searchParams.get("category");
    const minPrice = searchParams.get("minPrice");
    const maxPrice = searchParams.get("maxPrice");

    if (categoryParam) {
      const matched = categories.find(
        (c) => normalize(c.id) === normalize(categoryParam)
      );
      if (matched) {
        setCategory(matched.id);
      } else {
        setCategory("all");
      }
    }

    if (minPrice && maxPrice) {
      const min = parseInt(minPrice);
      const max = parseInt(maxPrice);
      if (!isNaN(min) && !isNaN(max)) {
        setPriceRange([min, max]);
      }
    }
  }, [searchParams, setCategory, setPriceRange]);

  const updateURL = (newFilters: Partial<FilterState>) => {
    const params = new URLSearchParams();

    if (newFilters.category && newFilters.category !== "all") {
      params.set("category", normalize(newFilters.category));
    }

    if (newFilters.priceRange) {
      params.set("minPrice", newFilters.priceRange[0].toString());
      params.set("maxPrice", newFilters.priceRange[1].toString());
    }

    const queryString = params.toString();
    const newURL = queryString ? `/?${queryString}` : "/";
    router.push(newURL, { scroll: false });
  };

  const handleCategoryChange = (category: string) => {
    setCategory(category);
    updateURL({ ...filters, category });
  };

  const handlePriceChange = (range: number[]) => {
    const newRange: [number, number] = [range[0], range[1]];
    setPriceRange(newRange);
    updateURL({ ...filters, priceRange: newRange });
  };

  return (
    <div className="bg-blue-600 text-white p-6 rounded-lg">
      <h2 className="text-xl font-semibold mb-6">Filters</h2>

      {/* Category Filter */}
      <div className="mb-8">
        <h3 className="text-lg font-medium mb-4">Category</h3>
        <RadioGroup
          value={filters.category}
          onValueChange={handleCategoryChange}
        >
          {categories.map((category) => (
            <div key={category.id} className="flex items-center space-x-2">
              <RadioGroupItem
                value={category.id}
                id={category.id}
                className="border-white text-white data-[state=checked]:bg-white data-[state=checked]:text-blue-600"
              />
              <Label
                htmlFor={category.id}
                className="text-white cursor-pointer capitalize"
              >
                {category.name}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      {/* Price Filter */}
      <div>
        <h3 className="text-lg font-medium mb-4">Price</h3>
        <div className="px-2">
          <Slider
            value={filters.priceRange}
            onValueChange={handlePriceChange}
            max={1000}
            min={0}
            step={10}
            className="mb-4"
          />
          <div className="flex justify-between text-sm text-blue-100">
            <span>${filters.priceRange[0]}</span>
            <span>${filters.priceRange[1]}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
