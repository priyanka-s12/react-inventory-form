import { useState } from 'react';
import Header from './components/Header';

function App() {
  const [productName, setProductName] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [condition, setCondition] = useState('');
  const [isWaterproof, setIsWaterproof] = useState(false);
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [dateInput, setDateInput] = useState('');
  const [unitNumber, setUnitNumber] = useState(0);
  const [unitCost, setUnitCost] = useState(0);
  const [vendorName, setvendorName] = useState('');
  const [formData, setFormData] = useState(false);
  const [conditionMessage, setConditionMessage] = useState(false);

  const featuresHandler = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedFeatures([...selectedFeatures, value]);
    } else {
      setSelectedFeatures(selectedFeatures.filter((feat) => feat != value));
    }
  };

  const formHandler = (event) => {
    event.preventDefault();
    if (
      productName &&
      quantity &&
      selectedCategory &&
      dateInput &&
      condition &&
      unitNumber &&
      unitCost &&
      vendorName
    ) {
      setFormData(true);
      setConditionMessage(false);
    } else {
      setConditionMessage(true);
    }
  };
  return (
    <div>
      <Header />
      <main className="bg-dark text-light py-3">
        <section className="container">
          <h2 className="mb-3">Inventory Form</h2>
          <form onSubmit={formHandler}>
            <label htmlFor="productName" className="form-label">
              Product Name:{' '}
            </label>
            <br />
            <input
              type="text"
              id="produtName"
              className="form-control"
              required
              onChange={(event) => setProductName(event.target.value)}
            />
            <br />

            <label htmlFor="quantity" className="form-label">
              Quantity:{' '}
            </label>
            <br />
            <input
              type="number"
              id="quantity"
              className="form-control"
              required
              onChange={(event) => setQuantity(event.target.value)}
            />
            <br />

            <label htmlFor="categorySelect" className="form-label">
              Category:{' '}
            </label>
            <select
              id="categorySelect"
              className="form-select"
              required
              onChange={(event) => setSelectedCategory(event.target.value)}
            >
              <option value="">Select Category</option>
              <option value="Clothing">Clothing</option>
              <option value="Footwear">Footwear</option>
              <option value="Equipment">Equipment</option>
            </select>
            <br />

            <label className="form-label">Condition: </label>
            <br />
            <label htmlFor="new" className="form-check-label me-3">
              <input
                type="radio"
                id="new"
                name="condition"
                value="New"
                className="form-check-input me-2"
                onChange={(event) => setCondition(event.target.value)}
              />
              New
            </label>
            <label htmlFor="used" className="form-check-label">
              <input
                type="radio"
                id="used"
                name="condition"
                value="Used"
                className="form-check-input me-2"
                onChange={(event) => setCondition(event.target.value)}
              />
              Used
            </label>
            <br />
            <br />
            {conditionMessage ? <p>Please select one option</p> : ''}

            <label htmlFor="waterproof" className="form-label">
              <input
                type="checkbox"
                id="waterproof"
                className="form-check-input me-2"
                checked={isWaterproof}
                onChange={(event) => setIsWaterproof(event.target.checked)}
              />
              Waterproof
            </label>
            <br />

            <label className="form-label">Features: </label>
            <br />
            <label className="form-label me-3" htmlFor="lightweight">
              <input
                type="checkbox"
                id="lightweight"
                value="Lightweight"
                className="form-check-input me-2"
                onChange={featuresHandler}
              />
              Lightweight
            </label>
            <label className="form-label" htmlFor="durable">
              <input
                type="checkbox"
                id="durable"
                value="Durable"
                className="form-check-input me-2"
                onChange={featuresHandler}
              />
              Durable
            </label>
            <br />

            <label htmlFor="dateInput" className="form-label">
              Date of Storage:{' '}
            </label>
            <br />
            <input
              type="date"
              id="dateInput"
              className="form-control"
              required
              onChange={(event) => setDateInput(event.target.value)}
            />
            <br />

            <label htmlFor="unitNumber" className="form-label">
              Storage Unit Number:{' '}
            </label>
            <br />
            <input
              type="number"
              id="unitNumber"
              className="form-control"
              required
              onChange={(event) => setUnitNumber(event.target.value)}
            />
            <br />

            <label htmlFor="unitCost" className="form-label">
              Unit Cost:{' '}
            </label>
            <br />
            <input
              type="number"
              id="unitCost"
              className="form-control"
              required
              onChange={(event) => setUnitCost(event.target.value)}
            />
            <br />

            <label htmlFor="vendorName" className="form-label">
              Vendor Name:{' '}
            </label>
            <input
              type="text"
              id="vendorName"
              className="form-control"
              required
              onChange={(event) => setvendorName(event.target.value)}
            />
            <br />

            <input type="submit" value="Submit" className="btn btn-primary" />
            <br />
          </form>
        </section>

        <section className="container mt-3">
          {formData && (
            <div>
              <h3>Submitted Details: </h3>
              <p>Product Name: {productName}</p>
              <p>Quantity: {quantity}</p>
              <p>Category: {selectedCategory}</p>
              <p>Condition: {condition}</p>
              <p>Waterproof: {isWaterproof ? 'Yes' : 'No'}</p>
              <p>
                Features:{' '}
                {selectedFeatures.length > 0
                  ? selectedFeatures.join(', ')
                  : 'none'}
              </p>
              <p>Date of Storage: {dateInput}</p>
              <p>Unit Cost: ${unitCost}</p>
              <p>Vendor Name: {vendorName}</p>
              <p>Total Cost: ${quantity * unitCost}</p>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
