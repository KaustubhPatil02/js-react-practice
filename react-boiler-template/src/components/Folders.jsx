import { useState } from "react";

const Folder = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [subFolders, setSubFolders] = useState(data.folders || []);

  const toggleFolder = () => setIsOpen(!isOpen);

  const addFolder = () => {
    const folderName = prompt("Enter new folder name:");
    if (folderName) {
      setSubFolders([...subFolders, { name: folderName, folders: [] }]);
    }
  };

  return (
    <div className="ml-4">
      <div className="flex items-center space-x-2">
        <button onClick={toggleFolder}>
          {isOpen ? "📂" : "📁"} {data.name}
        </button>
        <button onClick={addFolder} className="text-blue-500">➕</button>
      </div>

      {isOpen && (
        <div className="ml-6">
          {subFolders.length > 0 ? (
            subFolders.map((folder, index) => <Folder key={index} data={folder} />)
          ) : (
            <p className="ml-4 text-gray-400">Empty Folder</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Folder;
