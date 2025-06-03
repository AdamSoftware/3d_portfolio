
import { useEffect, useState, useRef } from 'react';
import ReactDOM from 'react-dom';

function SkillPopup({ skill, onClose }) {
  const [rotation, setRotation] = useState(0);
  const startX = useRef(null);
  const currentRotation = useRef(0);
  const dragging = useRef(false);

  // Close popup with Escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  // Mouse and touch event handlers
  const onMouseDown = (e) => {
    dragging.current = true;
    startX.current = e.clientX;
  };

  const onMouseMove = (e) => {
    if (!dragging.current) return;
    const deltaX = e.clientX - startX.current;
    const newRotation = currentRotation.current + deltaX;
    setRotation(newRotation);
  };

  const onMouseUp = () => {
    dragging.current = false;
    currentRotation.current = rotation;
  };

  const onTouchStart = (e) => {
    dragging.current = true;
    startX.current = e.touches[0].clientX;
  };

  const onTouchMove = (e) => {
    if (!dragging.current) return;
    const deltaX = e.touches[0].clientX - startX.current;
    const newRotation = currentRotation.current + deltaX;
    setRotation(newRotation);
  };

  const onTouchEnd = () => {
    dragging.current = false;
    currentRotation.current = rotation;
  };

  if (!skill) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 p-4">
      <div
        className="flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Coin */}
        <div
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          className="select-none cursor-grab mb-4"
          style={{
            width: '240px',
            height: '240px',
            perspective: '1200px',
            userSelect: 'none',
            position: 'relative',
          }}
        >
          <div
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              transformStyle: 'preserve-3d',
              transform: `rotateY(${rotation}deg)`,
              background: 'radial-gradient(circle at 30% 30%, #fceabb, #f8b500)',
              boxShadow: `
                inset 0 2px 4px rgba(255, 255, 255, 0.6),
                inset 0 -2px 4px rgba(0, 0, 0, 0.1),
                0 5px 15px rgba(0, 0, 0, 0.2)
              `,
              border: '2px solid rgba(255, 255, 255, 0.4)',
              position: 'relative',
            }}
          >
            {/* Front */}
            <div
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                backfaceVisibility: 'hidden',
                borderRadius: '50%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '1rem',
                color: '#222',
                textAlign: 'center',
              }}
            >
              <h3 className="blue-gradient_text font-semibold drop-shadow">{skill.name}</h3>
              <p className="text-sm text-black-700 mt-2">
                Skill type: {skill.type || 'No type given'}
              </p>
            </div>

            {/* Back */}
            <div
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                backfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)',
                borderRadius: '50%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                background: 'radial-gradient(circle at 30% 30%, #fceabb, #f8b500)',
                boxShadow: `
                  inset 0 2px 4px rgba(255, 255, 255, 0.6),
                  inset 0 -2px 4px rgba(0, 0, 0, 0.1),
                  0 5px 15px rgba(0, 0, 0, 0.2)
                `,
                padding: '1rem',
                color: '#222',
                textAlign: 'center',
                overflowWrap: 'break-word',
                overflowY: 'auto',
                fontSize: '0.694rem',
              }}
            >
              <p>{skill.Description || 'No description provided.'}</p>
            </div>
          </div>
        </div>

        {/* Close Button */}

        <button
          onClick={onClose}
          className="text-white px-5 py-2 rounded focus:outline-none focus:ring transition-transform duration-150"
          style={{
            background: 'linear-gradient(to bottom, #4b5563, #1f2937)', // dark gray gradient
            boxShadow: '0 4px 0 #1f2937, 0 6px 15px rgba(0,0,0,0.2)', // layered shadow
            transform: 'translateY(0)', // initial
            border: 'none',
            fontWeight: '600',
          }}
          onMouseDown={(e) => {
            e.currentTarget.style.transform = 'translateY(2px)';
            e.currentTarget.style.boxShadow = '0 2px 0 #1f2937, 0 3px 6px rgba(0,0,0,0.2)';
          }}
          onMouseUp={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 0 #1f2937, 0 6px 15px rgba(0,0,0,0.2)';
          }}
        >
          Close
        </button>

      </div>
    </div>,
    document.getElementById('portal-root')
  );
}

export default SkillPopup;

