import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { FaRegClock, FaTrophy, FaUsers } from 'react-icons/fa6'; 

const cards = [
  {
    id: 1,
    icon: <FaRegClock className="text-4xl text-gray-600 dark:text-gray-300" />,
    title: 'Time Challenges',
    description: 'Test your speed and accuracy against the clock in various timed modes.',
  },
  {
    id: 2,
    icon: <FaTrophy className="text-4xl text-gray-600 dark:text-gray-300" />,
    title: 'Leaderboards',
    description: 'Climb the ranks and showcase your typing prowess on global leaderboards.',
  },
  {
    id: 3,
    icon: <FaUsers className="text-4xl text-gray-600 dark:text-gray-300" />,
    title: 'Multiplayer Rooms',
    description: 'Create or join typing rooms to compete directly with friends and rivals.',
  },
//   {
//     id: 4,
//     icon: <FaRegClock className="text-4xl text-gray-600 dark:text-gray-300" />,
//     title: 'Time Challenges',
//     description: 'Test your speed and accuracy against the clock in various timed modes.',
//   },
//   {
//     id: 5,
//     icon: <FaTrophy className="text-4xl text-gray-600 dark:text-gray-300" />,
//     title: 'Leaderboards',
//     description: 'Climb the ranks and showcase your typing prowess on global leaderboards.',
//   },
//   {
//     id: 6,
//     icon: <FaUsers className="text-4xl text-gray-600 dark:text-gray-300" />,
//     title: 'Multiplayer Rooms',
//     description: 'Create or join typing rooms to compete directly with friends and rivals.',
//   },
];

function SelectActionCard() {
  const [selectedCard, setSelectedCard] = React.useState(0);

  return (
    <Box
      className="h-[200px]  p-1 mt-16 " 
      sx={{
        width: '70%',
        display: 'grid',
        // ⭐ Default: 3 equal columns (Desktop View) ⭐
        gridTemplateColumns: 'repeat(3, 1fr)', 
        gap: 3, 
        
        // ⭐ Responsive Fix: Small Screens par 1 column ⭐
        '@media (max-width: 900px)': {
          gridTemplateColumns: 'repeat(2, 1fr)', // Thoda chhota hua to 2 cards
        },
        '@media (max-width: 600px)': {
          gridTemplateColumns: '1fr', // Mobile par 1 card
          gap: 2,
          height: 'auto', // Height auto ho jayegi cards wrap hone par
        },
      }}
    >
      {cards.map((card, index) => (
        <Card
          key={card.id}
          className='bg-white dark:bg-black rounded-lg h-full' 
          sx={{
            borderRadius: 3,
            transition: "0.3s",
            boxShadow: selectedCard === index ? 6 : 1, 
            border: selectedCard === index ? '2px solid' : '1px solid',
            borderColor: selectedCard === index ? 'primary.main' : 'grey.700', 
            height: '100%', 
          }}
        >
          <CardActionArea
            className='bg-white dark:bg-black rounded-lg'
            onClick={() => setSelectedCard(index)}
            sx={{
              height: '100%',
              color: 'inherit', 
              
              ...(selectedCard === index && {
                '&:hover': {
                  opacity: 0.9,
                },
              }),
              
              ...(!(selectedCard === index) && {
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.05)',
                },
              }),
            }}
          >
            <CardContent sx={{ height: '100%', textAlign: "center" ,marginBottom:"2rem"}} >
              
              {/* Icon */}
              <div className="mb-3 flex justify-center">
                {card.icon}
              </div>

              {/* Title (Dark Text) */}
              <Typography 
                variant="h6" 
                component="div" 
                className="font-semibold text-gray-900 dark:text-white"
              >
                {card.title}
              </Typography>

              {/* Description (Subtle Text) */}
              <Typography 
                variant="body2" 
                color="text.secondary" 
                className="mt-1 text-gray-600 dark:text-gray-400"
              >
                {card.description}
              </Typography>

            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
}

export default SelectActionCard;