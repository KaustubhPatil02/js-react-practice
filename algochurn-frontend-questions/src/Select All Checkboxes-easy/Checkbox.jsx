import React, { useState } from 'react';
import { list } from './list';

const Checkbox = () => {
  const [listItems, setListItems] = useState(list);

  const handleChecked = (element, checkedValue) => {
    let temp = listItems.map((el) =>
      el.id === element.id ? { ...el, checked: checkedValue } : el
    );
    setListItems(temp);
  };

  const handleSelectAll = (checked) => {
    let temp = listItems.map((el) => ({ ...el, checked }));
    setListItems(temp);
  };

  return (
    <div className="h-screen p-4 bg-slate-50 background-gradient">
       <div className="flex items-center justify-center mb-4 text-4xl underline m">
        Text - document problem
      </div>
      <div className="flex flex-col max-w-2xl mx-auto overflow-hidden shadow-2xl rounded-xl">
        <div className="px-4 py-4 bg-gray-200">
          <input
            type="checkbox"
            checked={listItems.filter((el) => el.checked !== true).length < 1}
            onChange={(e) => handleSelectAll(e.target.checked)}
          />
          <label className="ml-2">Select All</label>
        </div>
        <form className="p-4">
          {listItems.map((item) => (
            <div key={item.id} className="flex items-center mb-2">
              <input
                type="checkbox"
                checked={item.checked}
                onChange={(e) => handleChecked(item, e.target.checked)}
              />
              <label className="ml-2">{item.name}</label>
            </div>
          ))}
        </form>
      </div>
    </div>
  );
};

export default Checkbox;