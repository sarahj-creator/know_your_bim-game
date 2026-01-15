import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Award, BookOpen } from 'lucide-react';

const chapters = [
  {
    id: 1,
    title: "Before England",
    subtitle: "Amerindian presence, mysterious abandonment",
    intro: "Long before European ships appeared on the horizon, Barbados was home to the Amerindians - first the Arawaks, then the Caribs. They called the island Ichirouganaim. They fished these waters, grew cassava and corn, and built their lives here for centuries. But when English sailors arrived in 1625, they found the island empty. The Amerindians had vanished. What happened to them remains one of our island's deepest mysteries.",
    questions: [
      {
        question: "What did the Amerindians call Barbados before European contact?",
        answers: ["Ichirouganaim", "Los Barbados", "Little England", "Bim"],
        correct: "Ichirouganaim",
        explanation: "The Amerindians named the island Ichirouganaim, which some scholars believe means 'red land with white teeth' - possibly referring to the red clay soil and white coastal cliffs."
      },
      {
        question: "Which two Amerindian groups inhabited Barbados before European arrival?",
        answers: ["Arawaks and Caribs", "Taino and Arawaks", "Maya and Aztec", "Inca and Caribs"],
        correct: "Arawaks and Caribs",
        explanation: "The peaceful Arawaks arrived first around 350 AD, followed by the more warlike Caribs around 1200 AD."
      },
      {
        question: "When English sailors arrived in 1625, what did they find?",
        answers: ["An abandoned island", "A thriving Amerindian settlement", "Spanish colonists", "Portuguese traders"],
        correct: "An abandoned island",
        explanation: "The island was mysteriously empty. Evidence suggests the Amerindians were either taken as slaves by Spanish or Portuguese raiders, or fled to other islands."
      },
      {
        question: "Which European country first claimed Barbados, and in what year?",
        answers: ["England, 1625", "Spain, 1492", "Portugal, 1500", "France, 1635"],
        correct: "England, 1625",
        explanation: "Captain John Powell claimed Barbados for England in 1625, and the first English settlers arrived in 1627."
      }
    ]
  },
  {
    id: 2,
    title: "Sugar & Chains",
    subtitle: "Plantation economy, daily life, resistance",
    intro: "By the 1640s, Barbados had transformed. What began as small tobacco farms became massive sugar plantations. The 'white gold' brought unimaginable wealth to plantation owners - and unspeakable suffering to the enslaved Africans forced to work the fields. By 1680, Barbados was the richest colony in English America, but this wealth was built on the backs of over 40,000 enslaved people. They worked from dawn to dusk cutting cane, boiling sugar, and enduring brutal conditions. Yet they never stopped resisting, keeping their culture alive and fighting for freedom.",
    questions: [
      {
        question: "What crop transformed Barbados into the richest English colony by the 1680s?",
        answers: ["Sugarcane", "Cotton", "Tobacco", "Indigo"],
        correct: "Sugarcane",
        explanation: "Sugar became 'white gold.' By 1680, Barbados produced more wealth than all other English American colonies combined."
      },
      {
        question: "Approximately what percentage of Barbados' arable land was used for sugar production at its peak?",
        answers: ["75%", "50%", "30%", "90%"],
        correct: "75%",
        explanation: "Sugar dominated the landscape. Nearly every available acre was turned over to cane, leaving little room for food crops or forests."
      },
      {
        question: "Who led the 1816 slave rebellion, the largest in Barbadian history?",
        answers: ["Bussa", "Toussaint", "Nat Turner", "Denmark Vesey"],
        correct: "Bussa",
        explanation: "Bussa, an enslaved African born in West Africa, led the 1816 rebellion. Though it was crushed, Bussa became a symbol of resistance. Today he is a National Hero."
      },
      {
        question: "Name two major exports of Barbados besides sugar during the plantation era.",
        answers: ["Rum & molasses", "Coffee & cocoa", "Gold & silver", "Bananas & pineapples"],
        correct: "Rum & molasses",
        explanation: "Molasses was a byproduct of sugar production, and rum was distilled from molasses. Both became major exports and sources of wealth."
      }
    ]
  },
  {
    id: 3,
    title: "The Road to Freedom",
    subtitle: "Emancipation, labor movements, modern struggle",
    intro: "August 1, 1834. After centuries of bondage, slavery was abolished in the British Empire. But freedom wasn't free - the formerly enslaved faced new challenges. They had no land, no education, limited rights. Plantation owners still held power. Yet our ancestors persevered. They built communities, churches, schools. They organized, protested, demanded their rights. Through labor movements, political organizing, and sheer determination, Black Barbadians fought their way from the cane fields to the polling stations.",
    questions: [
      {
        question: "In what year was slavery abolished in Barbados?",
        answers: ["1834", "1807", "1865", "1888"],
        correct: "1834",
        explanation: "The Slavery Abolition Act of 1833 took effect on August 1, 1834. However, former slaves had to serve as 'apprentices' until 1838."
      },
      {
        question: "What system replaced slavery immediately after 1834, keeping workers tied to plantations?",
        answers: ["Apprenticeship system", "Sharecropping", "Indentured servitude", "Wage labor"],
        correct: "Apprenticeship system",
        explanation: "The 'apprenticeship' system forced former slaves to work for their former masters for 4-6 more years before gaining full freedom in 1838."
      },
      {
        question: "Who was the first Premier of Barbados after the introduction of internal self-government in 1953?",
        answers: ["Grantley Adams", "Errol Barrow", "Tom Adams", "David Thompson"],
        correct: "Grantley Adams",
        explanation: "Sir Grantley Herbert Adams, founder of the Barbados Labour Party, became the first Premier. He fought for workers' rights and political representation."
      },
      {
        question: "What major labor riot in 1937 marked a turning point in Barbadian politics?",
        answers: ["The labor disturbances of 1937", "The Bridgetown Riot", "The Sugar Strike", "The Independence March"],
        correct: "The labor disturbances of 1937",
        explanation: "The 1937 riots, sparked by poor wages and conditions, led to the formation of trade unions and political parties that would lead Barbados to independence."
      }
    ]
  },
  {
    id: 4,
    title: "Building a Nation",
    subtitle: "Self-government, independence, modern Barbados",
    intro: "November 30, 1966. At midnight, the Union Jack was lowered and the Broken Trident was raised. Barbados was free. Errol Barrow, our first Prime Minister, declared: 'We are a peaceful, decent, law-abiding people.' Under his leadership and those who followed, Barbados built something remarkable - a stable democracy, high literacy rates, strong institutions. We've navigated economic challenges, political transitions, and global changes. And in 2021, we took our final step away from our colonial past, becoming a republic with our own Barbadian head of state.",
    questions: [
      {
        question: "On what date did Barbados gain independence from Britain?",
        answers: ["November 30, 1966", "August 1, 1834", "January 1, 1970", "July 4, 1966"],
        correct: "November 30, 1966",
        explanation: "After 339 years as a British colony, Barbados became an independent nation on November 30, 1966."
      },
      {
        question: "Who was Barbados' first Prime Minister after independence?",
        answers: ["Errol Barrow", "Grantley Adams", "Tom Adams", "Owen Arthur"],
        correct: "Errol Barrow",
        explanation: "The Right Excellent Errol Walton Barrow led Barbados to independence and served as Prime Minister. He is a National Hero."
      },
      {
        question: "Which political party dominated Barbados politics in the first decades after independence?",
        answers: ["Democratic Labour Party", "Barbados Labour Party", "People's Progressive Party", "Green Party"],
        correct: "Democratic Labour Party",
        explanation: "Actually, both parties alternated power, but the DLP under Barrow led the independence movement and governed first."
      },
      {
        question: "In what year did Barbados transition from a constitutional monarchy to a republic?",
        answers: ["2021", "2000", "2018", "1999"],
        correct: "2021",
        explanation: "On November 30, 2021, exactly 55 years after independence, Barbados became a republic with Dame Sandra Mason as the first President."
      }
    ]
  },
  {
    id: 5,
    title: "Our Island Home",
    subtitle: "Geography, ecology, culture today",
    intro: "We are a small island - only 166 square miles - but incredibly diverse. Rugged cliffs on the east where Atlantic waves crash. Calm turquoise waters on the west. Underground caves carved over millions of years. Coral reefs protecting our shores. The Barbados Bullfinch singing in the trees. Hawksbill turtles nesting on our beaches. This is our home, shaped by geology, climate, and centuries of human hands. Today we celebrate it through Crop Over, preserve it in our UNESCO World Heritage sites, and work to protect it for future generations.",
    questions: [
      {
        question: "What is Barbados' highest point?",
        answers: ["Mount Hillaby", "Ragged Point", "Cherry Tree Hill", "Hackleton's Cliff"],
        correct: "Mount Hillaby",
        explanation: "Mount Hillaby in the Scotland District stands at 340 meters (1,115 feet) above sea level."
      },
      {
        question: "The Crop Over Festival is celebrated annually. What is its historical significance?",
        answers: ["Marks the end of the sugarcane harvest", "Commemorates independence", "Celebrates fishing season", "Honors Barbadian saints"],
        correct: "Marks the end of the sugarcane harvest",
        explanation: "Crop Over began in the 1780s as a harvest festival. After months of hard labor, workers would celebrate the end of the sugar harvest season."
      },
      {
        question: "Name a UNESCO World Heritage Site in Barbados.",
        answers: ["Historic Bridgetown and its Garrison", "Harrison's Cave", "Graeme Hall Swamp", "Bathsheba Beach"],
        correct: "Historic Bridgetown and its Garrison",
        explanation: "Historic Bridgetown and its Garrison were inscribed as a UNESCO World Heritage Site in 2011, recognizing their outstanding colonial architecture and history."
      },
      {
        question: "Which marine turtle species nests on Barbados' beaches?",
        answers: ["Hawksbill Turtle", "Green Turtle", "Loggerhead Turtle", "Leatherback Turtle"],
        correct: "Hawksbill Turtle",
        explanation: "Both Hawksbill and Leatherback turtles nest here, but Hawksbills are more common. These endangered turtles return to our beaches each year to lay their eggs."
      },
      {
        question: "What protects Barbados' west coast from strong Atlantic waves?",
        answers: ["Coral reefs", "Artificial breakwaters", "Mangrove forests", "Rocky cliffs"],
        correct: "Coral reefs",
        explanation: "Fringing coral reefs run along much of our coastline, absorbing wave energy and creating the calm, clear waters our west coast is famous for."
      },
      {
        question: "Barbados participates in renewable energy initiatives. Name one type of renewable energy being developed on the island.",
        answers: ["Solar power", "Nuclear power", "Coal power", "Geothermal energy"],
        correct: "Solar power",
        explanation: "Barbados is a leader in Caribbean solar energy. The government aims for 100% renewable energy by 2030, with solar panels increasingly common on homes and businesses."
      }
    ]
  }
];

const BarbadosQuiz = () => {
  const [currentChapter, setCurrentChapter] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showIntro, setShowIntro] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [completedChapters, setCompletedChapters] = useState([]);
  const [gameComplete, setGameComplete] = useState(false);
  const audioRef = useRef(null);

  const chapter = chapters[currentChapter];
  const question = chapter.questions[currentQuestion];
  const totalQuestions = chapters.reduce((sum, ch) => sum + ch.questions.length, 0);
  const questionsAnswered = completedChapters.reduce((sum, chIdx) => 
    sum + chapters[chIdx].questions.length, 0) + currentQuestion;

  useEffect(() => {
    // Note: Add your soca music file here
    // audioRef.current = new Audio('path-to-your-soca-music.mp3');
    // audioRef.current.loop = true;
    // audioRef.current.volume = 0.3;
  }, []);

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.play().catch(e => console.log('Audio play failed:', e));
      } else {
        audioRef.current.pause();
      }
    }
  };

  const handleAnswer = (answer) => {
    if (answered) return;
    
    setAnswered(true);
    setSelectedAnswer(answer);
    
    if (answer === question.correct) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (!answered) return;

    if (currentQuestion < chapter.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setAnswered(false);
      setSelectedAnswer(null);
    } else {
      // Chapter complete
      const newCompleted = [...completedChapters, currentChapter];
      setCompletedChapters(newCompleted);
      
      if (currentChapter < chapters.length - 1) {
        setCurrentChapter(currentChapter + 1);
        setCurrentQuestion(0);
        setAnswered(false);
        setSelectedAnswer(null);
        setShowIntro(true);
      } else {
        setGameComplete(true);
      }
    }
  };

  const startChapter = () => {
    setShowIntro(false);
  };

  const restartGame = () => {
    setCurrentChapter(0);
    setCurrentQuestion(0);
    setScore(0);
    setAnswered(false);
    setSelectedAnswer(null);
    setShowIntro(true);
    setCompletedChapters([]);
    setGameComplete(false);
  };

  if (gameComplete) {
    const percentage = Math.round((score / totalQuestions) * 100);
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-700 to-yellow-500 p-4 flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-2xl p-8 max-w-2xl w-full text-center">
          <div className="text-6xl mb-4">🔱</div>
          <h1 className="text-4xl font-bold text-blue-900 mb-4">Journey Complete!</h1>
          <div className="bg-yellow-100 border-2 border-yellow-400 rounded-lg p-6 mb-6">
            <Award className="w-16 h-16 text-yellow-600 mx-auto mb-4" />
            <p className="text-2xl font-bold text-gray-800 mb-2">
              Your Score: {score} / {totalQuestions}
            </p>
            <p className="text-xl text-gray-600">
              {percentage}% - {percentage >= 80 ? "Excellent!" : percentage >= 60 ? "Good work!" : "Keep learning!"}
            </p>
          </div>
          <div className="text-left space-y-2 mb-6">
            {chapters.map((ch, idx) => (
              <div key={ch.id} className="flex items-center justify-between bg-gray-50 p-3 rounded">
                <span className="font-semibold">{ch.title}</span>
                <span className="text-green-600">✓ Completed</span>
              </div>
            ))}
          </div>
          <button
            onClick={restartGame}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition"
          >
            Restart Journey
          </button>
        </div>
      </div>
    );
  }

  if (showIntro) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-700 to-yellow-500 p-4 flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-2xl p-8 max-w-3xl w-full">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <BookOpen className="w-8 h-8 text-blue-600" />
              <span className="text-sm font-semibold text-gray-600">
                Chapter {chapter.id} of {chapters.length}
              </span>
            </div>
            <button
              onClick={toggleMute}
              className="p-2 rounded-full hover:bg-gray-100 transition"
              title={isMuted ? "Unmute music" : "Mute music"}
            >
              {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
            </button>
          </div>
          
          <div className="text-center mb-6">
            <div className="text-5xl mb-4">🔱</div>
            <h1 className="text-3xl font-bold text-blue-900 mb-2">{chapter.title}</h1>
            <p className="text-lg text-gray-600 italic">{chapter.subtitle}</p>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-6 rounded">
            <p className="text-gray-800 leading-relaxed">{chapter.intro}</p>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-600">
              {chapter.questions.length} questions in this chapter
            </p>
            <button
              onClick={startChapter}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition"
            >
              Begin Chapter
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-700 to-yellow-500 p-4 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-2xl p-8 max-w-2xl w-full">
        <div className="flex justify-between items-center mb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <BookOpen className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-semibold text-blue-600">{chapter.title}</span>
            </div>
            <div className="text-sm text-gray-600">
              Question {questionsAnswered + 1} of {totalQuestions} • 
              Chapter {currentChapter + 1}/{chapters.length}
            </div>
          </div>
          <button
            onClick={toggleMute}
            className="p-2 rounded-full hover:bg-gray-100 transition"
            title={isMuted ? "Unmute music" : "Mute music"}
          >
            {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
          </button>
        </div>

        <div className="text-center mb-8">
          <div className="text-4xl mb-4">🔱</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{question.question}</h2>
        </div>

        <div className="space-y-3 mb-6">
          {question.answers.map((answer, idx) => {
            const isCorrect = answer === question.correct;
            const isSelected = answer === selectedAnswer;
            let buttonClass = "w-full p-4 text-left rounded-lg border-2 transition font-medium ";
            
            if (!answered) {
              buttonClass += "border-gray-300 hover:border-blue-500 hover:bg-blue-50";
            } else {
              if (isCorrect) {
                buttonClass += "border-green-500 bg-green-100 text-green-800";
              } else if (isSelected && !isCorrect) {
                buttonClass += "border-red-500 bg-red-100 text-red-800";
              } else {
                buttonClass += "border-gray-300 bg-gray-50 text-gray-500";
              }
            }

            return (
              <button
                key={idx}
                onClick={() => handleAnswer(answer)}
                disabled={answered}
                className={buttonClass}
              >
                {answer}
                {answered && isCorrect && " ✓"}
                {answered && isSelected && !isCorrect && " ✗"}
              </button>
            );
          })}
        </div>

        {answered && (
          <div className={`p-4 rounded-lg mb-6 ${
            selectedAnswer === question.correct 
              ? 'bg-green-50 border border-green-200' 
              : 'bg-blue-50 border border-blue-200'
          }`}>
            <p className="text-gray-800">{question.explanation}</p>
          </div>
        )}

        <div className="flex justify-between items-center">
          <div className="text-lg font-semibold text-gray-700">
            Score: {score} / {totalQuestions}
          </div>
          <button
            onClick={nextQuestion}
            disabled={!answered}
            className={`px-6 py-3 rounded-lg font-bold transition ${
              answered
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            {currentQuestion < chapter.questions.length - 1 ? 'Next Question' : 'Complete Chapter'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BarbadosQuiz;
