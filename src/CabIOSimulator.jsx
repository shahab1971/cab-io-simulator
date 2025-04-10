import React, { useState } from 'react';

export default function CabIOSimulator() {
  const [cab1Active, setCab1Active] = useState('inactive');
  const [cab2Active, setCab2Active] = useState('inactive');
  const [dirCab1, setDirCab1] = useState('neutral');
  const [dirCab2, setDirCab2] = useState('neutral');
  const [tractionCutoff, setTractionCutoff] = useState('normal');
  const [relay1, setRelay1] = useState('off');
  const [relay2, setRelay2] = useState('off');
  const [log, setLog] = useState([]);

  const soundHorn = () => {
    const timestamp = new Date().toLocaleTimeString();
    setLog(prev => [`[${timestamp}] Horn sounded.`, ...prev]);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Cab Input/Output Simulator</h2>

      <div className="grid grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block font-semibold">CAB1 Active State</label>
          <select value={cab1Active} onChange={e => setCab1Active(e.target.value)} className="w-full border rounded p-2">
            <option value="inactive">Inactive</option>
            <option value="active">Active</option>
          </select>
        </div>
        <div>
          <label className="block font-semibold">CAB2 Active State</label>
          <select value={cab2Active} onChange={e => setCab2Active(e.target.value)} className="w-full border rounded p-2">
            <option value="inactive">Inactive</option>
            <option value="active">Active</option>
          </select>
        </div>
        <div>
          <label className="block font-semibold">CAB1 Direction</label>
          <select value={dirCab1} onChange={e => setDirCab1(e.target.value)} className="w-full border rounded p-2">
            <option value="neutral">Neutral</option>
            <option value="fwd">Forward</option>
            <option value="rev">Reverse</option>
          </select>
        </div>
        <div>
          <label className="block font-semibold">CAB2 Direction</label>
          <select value={dirCab2} onChange={e => setDirCab2(e.target.value)} className="w-full border rounded p-2">
            <option value="neutral">Neutral</option>
            <option value="fwd">Forward</option>
            <option value="rev">Reverse</option>
          </select>
        </div>
      </div>

      <div className="mb-6">
        <label className="block font-semibold">Traction Cutoff Feedback</label>
        <select value={tractionCutoff} onChange={e => setTractionCutoff(e.target.value)} className="w-full border rounded p-2">
          <option value="normal">Normal</option>
          <option value="cutoff">Cutoff</option>
        </select>
      </div>

      <div className="mb-6">
        <label className="block font-semibold">Soft Relays</label>
        <div className="grid grid-cols-2 gap-6 mt-2">
          <select value={relay1} onChange={e => setRelay1(e.target.value)} className="w-full border rounded p-2">
            <option value="off">Relay 1 - Off</option>
            <option value="on">Relay 1 - On</option>
          </select>
          <select value={relay2} onChange={e => setRelay2(e.target.value)} className="w-full border rounded p-2">
            <option value="off">Relay 2 - Off</option>
            <option value="on">Relay 2 - On</option>
          </select>
        </div>
      </div>

      <div className="mb-6">
        <button onClick={soundHorn} className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Sound Horn</button>
      </div>

      <div className="bg-gray-100 p-4 rounded">
        <h4 className="font-semibold mb-2">Output Log</h4>
        <div className="text-sm space-y-1 max-h-40 overflow-y-auto">
          {log.map((entry, index) => <div key={index}>{entry}</div>)}
        </div>
      </div>
    </div>
  );
}
