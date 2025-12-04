import React from 'react';
import { TOPICS } from '../constants';
import { Topic } from '../types';

interface TopicGridProps {
  onSelectTopic: (topic: Topic) => void;
}

const TopicGrid: React.FC<TopicGridProps> = ({ onSelectTopic }) => {
  // Mapping emoji names to actual SVGs or simple emojis for simplicity in this demo
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case '⚖️': return '⚖️';
      case 'busts_in_silhouette': return '👥';
      case 'office_building': return '🏢';
      case 'handshake': return '🤝';
      case 'chart_with_downwards_trend': return '📉';
      case 'computer': return '💻';
      default: return '📄';
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
      {TOPICS.map((topic) => (
        <button
          key={topic.id}
          onClick={() => onSelectTopic(topic)}
          className="flex flex-col items-start p-5 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md hover:border-amber-400 transition-all duration-200 text-left group"
        >
          <span className="text-3xl mb-3 bg-slate-50 p-3 rounded-full group-hover:bg-amber-50 transition-colors">
            {getIcon(topic.icon)}
          </span>
          <h3 className="font-semibold text-slate-800 text-lg group-hover:text-amber-600 transition-colors">
            {topic.title}
          </h3>
          <p className="text-sm text-slate-500 mt-1 line-clamp-2">
            {topic.description}
          </p>
        </button>
      ))}
    </div>
  );
};

export default TopicGrid;