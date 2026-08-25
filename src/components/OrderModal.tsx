import React, { useState } from 'react';
import { FLAVORS } from '../data';
import { X, CheckCircle2, ShoppingBag, Truck, ShieldCheck, Sparkles, PhoneCall } from 'lucide-react';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialFlavorId?: string;
}

export const OrderModal: React.FC<OrderModalProps> = ({
  isOpen,
  onClose,
  initialFlavorId
}) => {
  const [selectedFlavorId, setSelectedFlavorId] = useState(initialFlavorId || 'orange');
  const [packSize, setPackSize] = useState<'4' | '12' | '24'>('12');
  const [quantity, setQuantity] = useState(1);
  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderId, setOrderId] = useState('');

  if (!isOpen) return null;

  const currentFlavor = FLAVORS.find((f) => f.id === selectedFlavorId) || FLAVORS[0];

  const pricing = {
    '4': 14.99,
    '12': 38.99,
    '24': 68.99
  };

  const totalPrice = (pricing[packSize] * quantity).toFixed(2);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newId = `SPY-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderId(newId);
    setOrderPlaced(true);
  };

  const handleReset = () => {
    setOrderPlaced(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fade-in">
      <div
        className="relative w-full max-w-xl bg-white rounded-[32px] shadow-2xl overflow-hidden border border-slate-100 flex flex-col max-h-[90vh]"
        style={{
          borderTop: `8px solid ${currentFlavor.bgColor}`
        }}
      >
        {/* Modal Header */}
        <div className="p-6 sm:p-8 flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-white"
              style={{ backgroundColor: currentFlavor.bgColor }}
            >
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-cabinet font-black text-2xl text-slate-900 leading-tight">
                {orderPlaced ? 'Order Confirmed!' : 'Order Fresh Chilled SPYIT'}
              </h3>
              <p className="text-slate-500 text-xs font-sans">
                {orderPlaced ? 'Your cold delivery is on its way' : 'Direct fresh dispatch within 24h'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {orderPlaced ? (
            <div className="flex flex-col items-center text-center py-6 space-y-4">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center text-white shadow-xl animate-bounce"
                style={{ backgroundColor: currentFlavor.bgColor }}
              >
                <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
              </div>
              <h4 className="font-cabinet text-3xl font-black text-slate-900">
                Cheers, {customerName || 'Explorer'}!
              </h4>
              <p className="text-slate-600 text-sm max-w-md font-medium leading-relaxed">
                We've received your order for{' '}
                <span className="font-bold text-slate-900">
                  {quantity}x {packSize}-Pack of {currentFlavor.subName}
                </span>
                . It is being cold-packaged and dispatched to your address.
              </p>

              <div className="bg-slate-50 p-4 rounded-2xl w-full border border-slate-100 text-left space-y-2 text-xs font-sans">
                <div className="flex justify-between">
                  <span className="text-slate-500">Tracking Code:</span>
                  <span className="font-bold text-slate-900 font-mono">{orderId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Estimated Cold Arrival:</span>
                  <span className="font-bold text-emerald-600">Within 24 Hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Total Billed:</span>
                  <span className="font-bold text-slate-900">${totalPrice}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-500 pt-2">
                <Truck className="w-4 h-4 text-emerald-600" />
                <span>Insulated chilled temperature guaranteed</span>
              </div>

              <button
                onClick={handleReset}
                className="w-full py-3.5 mt-4 rounded-full text-white font-cabinet font-bold text-base shadow-lg transition-transform hover:scale-[1.02] cursor-pointer"
                style={{ backgroundColor: currentFlavor.bgColor }}
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Flavor Selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2.5">
                  1. Select Favorite Flavor
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {FLAVORS.map((f) => (
                    <button
                      key={f.id}
                      type="button"
                      onClick={() => setSelectedFlavorId(f.id)}
                      className={`p-2.5 rounded-2xl border text-center transition-all flex flex-col items-center gap-1.5 cursor-pointer ${
                        selectedFlavorId === f.id
                          ? 'border-2 shadow-md bg-slate-50 scale-[1.02]'
                          : 'border-slate-200 hover:border-slate-300'
                      }`}
                      style={{
                        borderColor: selectedFlavorId === f.id ? f.bgColor : undefined
                      }}
                    >
                      <div
                        className="w-6 h-6 rounded-full"
                        style={{ backgroundColor: f.cardBgColor }}
                      />
                      <span className="text-xs font-bold font-cabinet text-slate-900">
                        {f.name}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Pack Size */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2.5">
                  2. Choose Pack Size
                </label>
                <div className="grid grid-cols-3 gap-3">
                  <button
                    type="button"
                    onClick={() => setPackSize('4')}
                    className={`p-3 rounded-2xl border text-center transition-all cursor-pointer ${
                      packSize === '4'
                        ? 'border-slate-900 bg-slate-900 text-white shadow-md'
                        : 'border-slate-200 text-slate-800 hover:bg-slate-50'
                    }`}
                  >
                    <p className="font-cabinet font-bold text-sm">4-Pack</p>
                    <p className="text-xs opacity-80">$14.99</p>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPackSize('12')}
                    className={`p-3 rounded-2xl border text-center transition-all relative cursor-pointer ${
                      packSize === '12'
                        ? 'border-slate-900 bg-slate-900 text-white shadow-md'
                        : 'border-slate-200 text-slate-800 hover:bg-slate-50'
                    }`}
                  >
                    <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-amber-400 text-slate-950 text-[9px] font-black px-1.5 py-0.2 rounded-full uppercase">
                      Popular
                    </span>
                    <p className="font-cabinet font-bold text-sm">12-Pack</p>
                    <p className="text-xs opacity-80">$38.99</p>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPackSize('24')}
                    className={`p-3 rounded-2xl border text-center transition-all cursor-pointer ${
                      packSize === '24'
                        ? 'border-slate-900 bg-slate-900 text-white shadow-md'
                        : 'border-slate-200 text-slate-800 hover:bg-slate-50'
                    }`}
                  >
                    <p className="font-cabinet font-bold text-sm">24-Pack</p>
                    <p className="text-xs opacity-80">$68.99</p>
                  </button>
                </div>
              </div>

              {/* Quantity Counter */}
              <div className="flex items-center justify-between bg-slate-50 p-3.5 rounded-2xl border border-slate-200">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Quantity
                </span>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-8 h-8 rounded-full bg-white border border-slate-300 text-slate-800 font-bold flex items-center justify-center hover:bg-slate-100"
                  >
                    -
                  </button>
                  <span className="font-bold text-slate-900 font-cabinet text-base w-4 text-center">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-8 h-8 rounded-full bg-white border border-slate-300 text-slate-800 font-bold flex items-center justify-center hover:bg-slate-100"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Delivery Details Inputs */}
              <div className="space-y-3">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">
                  3. Delivery &amp; Contact Details
                </label>
                <input
                  required
                  placeholder="Full Name"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-800"
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    required
                    type="tel"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-800"
                  />
                  <input
                    required
                    placeholder="Delivery Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-800"
                  />
                </div>
              </div>

              {/* Price & Submit Action */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-500">Total Price</p>
                  <p className="font-cabinet font-black text-2xl text-slate-900">
                    ${totalPrice}
                  </p>
                </div>
                <button
                  type="submit"
                  className="px-8 py-3.5 rounded-full text-white font-cabinet font-bold text-base shadow-xl transition-all hover:scale-[1.02] active:scale-95 flex items-center gap-2 cursor-pointer"
                  style={{ backgroundColor: currentFlavor.bgColor }}
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Place Cold Order</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
