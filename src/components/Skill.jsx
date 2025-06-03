
import { useState } from 'react';
import SkillPopup from './SkillPopup'; // Adjust the path if needed

function Skill({ skill }) {
  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => setShowPopup(true);
  const closePopup = () => setShowPopup(false);

  return (
    <>
      <div className="text-center">
        <img
          src={skill.imageUrl}
          alt={skill.name}
          className="w-1/2 h-1/2 object-contain cursor-pointer"
          onClick={openPopup}
        />
      </div>

      {showPopup && <SkillPopup skill={skill} onClose={closePopup} />}
    </>
  );
}

export default Skill;

