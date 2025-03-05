"use client";
import { CardSpotlight } from "@/components/ui/card-spotlight";

const featureCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <CardSpotlight
        radius={350}
        animationSpeed={0.6}
        colors={[ [255, 0, 0], [0, 0, 255] ]}
        dotSize={4}
      >
        <div className="p-6 bg-white rounded-md shadow-lg">
          <h3 className="text-lg font-bold">Feature 1</h3>
          <p className="text-gray-600">Description of feature 1.</p>
        </div>
      </CardSpotlight>

      <CardSpotlight
        radius={300}
        animationSpeed={0.5}
        colors={[ [139, 92, 246], [255, 159, 28] ]}
        dotSize={3}
      >
        <div className="p-6 bg-white rounded-md shadow-lg">
          <h3 className="text-lg font-bold">Feature 2</h3>
          <p className="text-gray-600">Description of feature 2.</p>
        </div>
      </CardSpotlight>

      <CardSpotlight
        radius={400}
        animationSpeed={0.7}
        colors={[ [34, 193, 195], [253, 187, 45] ]}
        dotSize={5}
      >
        <div className="p-6 bg-white rounded-md shadow-lg">
          <h3 className="text-lg font-bold">Feature 3</h3>
          <p className="text-gray-600">Description of feature 3.</p>
        </div>
      </CardSpotlight>
    </div>
  );
};
