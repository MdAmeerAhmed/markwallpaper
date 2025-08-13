import React, { useState } from 'react';

const WallpaperCostCalculator = () => {
  const [wallpaperType, setWallpaperType] = useState('basic');
  const [wallArea, setWallArea] = useState('');
  const [materialCost, setMaterialCost] = useState(0);
  const [installationCost, setInstallationCost] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

  const wallpaperRates = {
    basic: 50,
    premium: 70,
    luxury: 90,
  };

  const handleCalculate = (area, type) => {
    const areaValue = parseFloat(area) || 0;
    const selectedRate = wallpaperRates[type];

    const material = areaValue * selectedRate;
    const installation = areaValue * 10;
    const total = material + installation;

    setMaterialCost(material);
    setInstallationCost(installation);
    setTotalCost(total);
  };

  const handleWallAreaChange = (e) => {
    const value = e.target.value;
    setWallArea(value);
    handleCalculate(value, wallpaperType);
  };

  const handleWallpaperChange = (e) => {
    const value = e.target.value;
    setWallpaperType(value);
    handleCalculate(wallArea, value);
  };

  return (
  <> 
  <section className="w3l-passion-mid-sec py-5">
        <div className="container py-md-5 py-3">
            <div className="container">
                <div className="row w3l-passion-mid-grids">
                    
                    <div className="col-lg-6 w3hny-passion-item w3l-content-8">
                        <h6 className="title-subw3hny mb-1">Instant Wallpaper Cost Calculator</h6>
                        <h3 className="title-w3l mb-3">Wall Paper Installation Cost Calculator.</h3>
                        
                     {/* Wallpaper Type */}
          <div className="mb-3">
            <label className="form-label">Select Wallpaper Type</label>
            <select
              value={wallpaperType}
              onChange={handleWallpaperChange}
              className="form-select"
            >
              <option value="basic">Basic (₹50/sqft)</option>
              <option value="premium">Premium (₹70/sqft)</option>
              <option value="luxury">Luxury (₹90/sqft)</option>
            </select>
          </div>

          {/* Wall Area */}
          <div className="mb-3">
            <label className="form-label">Wall Area (in square feet)</label>
            <input
              type="number"
              value={wallArea}
              onChange={handleWallAreaChange}
              placeholder="Enter total wall area"
              className="form-control"
            />
          </div>

          {/* Cost Breakdown */}
          <div className="p-3 mb-3 bg-light border rounded d-flex justify-content-between">
            <strong>Material Cost:</strong> ₹{materialCost.toFixed(2)}
          </div>
          <div className="p-3 mb-3 bg-light border rounded d-flex justify-content-between">
  <strong>Installation Cost:</strong> ₹{installationCost.toFixed(2)}
</div>
          <div className="p-3 mb-3 btn btn-primary text-white fw-bold rounded d-flex justify-content-between">
            <strong>Total Cost:</strong> ₹{totalCost.toFixed(2)}
          </div>

          {/* Note */}
          <p className="small text-muted mt-3">
            Note: Installation charge is fixed at ₹10 per square feet.
            <br />* This is an approximate estimation. Final costs may vary based on wall condition and design complexity.
          </p>
                    </div>
                    <div className="col-lg-6 passion-grid-item-info pe-lg-5 mb-lg-0 mb-2">

                        <div className="content-8-img"><img src="assets/images/ab1.jpg" className="img-fluid radius-image" alt=""/></div>
                    </div>
                </div>

            </div>
        </div>
    </section>
    
    </>
  );
};

export default WallpaperCostCalculator;
