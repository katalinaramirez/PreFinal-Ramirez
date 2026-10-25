import { useState } from 'react';
import type { Product } from '../types';

interface AddProductFormProps {
  onAddProduct: (product: Omit<Product, 'id'>) => void;
}

function AddProductForm({ onAddProduct }: AddProductFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    price: '',
    rating: '4.5',
    quantity: '',
    image: '/hero.png',
    shortDesc: '',
    fullDesc: '',
    specs: ''
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Product name is required';
    if (!formData.category.trim()) newErrors.category = 'Category is required';
    if (!formData.price || Number(formData.price) <= 0) newErrors.price = 'Valid price is required';
    if (!formData.quantity || Number(formData.quantity) < 0) newErrors.quantity = 'Valid quantity is required';
    if (!formData.shortDesc.trim()) newErrors.shortDesc = 'Short description is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    onAddProduct({
      name: formData.name,
      category: formData.category,
      price: Number(formData.price),
      rating: Number(formData.rating),
      quantity: Number(formData.quantity),
      image: formData.image,
      shortDesc: formData.shortDesc,
      fullDesc: formData.fullDesc || formData.shortDesc,
      specs: formData.specs || 'Standard serving'
    });
    
    setFormData({
      name: '', category: '', price: '', rating: '4.5', quantity: '',
      image: '/hero.png', shortDesc: '', fullDesc: '', specs: ''
    });
  };

  return (
    <div className="add-product-form">
      <h3>➕ Add New Product</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Product Name" value={formData.name} onChange={handleChange} />
        {errors.name && <span className="error">{errors.name}</span>}

        <input type="text" name="category" placeholder="Category" value={formData.category} onChange={handleChange} />
        {errors.category && <span className="error">{errors.category}</span>}

        <input type="number" name="price" placeholder="Price" step="0.01" value={formData.price} onChange={handleChange} />
        {errors.price && <span className="error">{errors.price}</span>}

        <input type="number" name="quantity" placeholder="Quantity" value={formData.quantity} onChange={handleChange} />
        {errors.quantity && <span className="error">{errors.quantity}</span>}

        <textarea name="shortDesc" placeholder="Short Description" value={formData.shortDesc} onChange={handleChange} />
        {errors.shortDesc && <span className="error">{errors.shortDesc}</span>}

        <textarea name="fullDesc" placeholder="Full Description (optional)" value={formData.fullDesc} onChange={handleChange} />
        <textarea name="specs" placeholder="Specifications (optional)" value={formData.specs} onChange={handleChange} />

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default AddProductForm;
