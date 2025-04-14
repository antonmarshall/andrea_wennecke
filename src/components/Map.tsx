
import React from 'react';

const Map = () => {
  return (
    <div className="h-[400px] w-full rounded-lg overflow-hidden">
      <iframe
        title="Praxisstandort"
        width="100%"
        height="100%"
        frameBorder="0"
        scrolling="no"
        marginHeight={0}
        marginWidth={0}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2363.8046550390897!2d10.682561376739662!3d53.86852197246139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b2090ef8aaaaab%3A0x90f61584acac3e89!2sB%C3%A4ckergrube%201%2C%2023552%20L%C3%BCbeck!5e0!3m2!1sen!2sde!4v1681338000000"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
};

export default Map;
