import React from 'react';
import clsx from 'clsx'; // Optional: for cleaner class logic

const RoleCard = ({ icon, title, description, isSelected, onSelect, onDeselect }) => {
  return (
    <button
      onClick={onSelect}
      onDoubleClick={onDeselect}
      className={clsx(
        'w-full grid grid-cols-[auto_1fr] p-4 rounded-2xl transition-all text-left mb-2 border',
        isSelected ? 'border-green-500 bg-green-50' : 'border-gray-200 bg-white hover:bg-gray-100'
      )}
    >
      <div className="text-xl grid items-center">{icon}</div>
      <div className='ml-4'>
        <h2 className="text-txt-md-14 font-semibold mb-2">{title}</h2>
        <p className="text-links text-sm">{description}</p>
      </div>
    </button>
  );
};

export default RoleCard;
