import { useState } from 'react';

import { Link } from 'react-router-dom';

function JoinQuiz() {
  const [quizCode, setQuizCode] = useState<string>('');

  const handleJoin = () => {
    // Handle joining the quiz with the entered code
  };

  return (
    <div>
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
      <span className="text-2xl text-gray-700">Vul je quiz wachtwoord in</span>
      <input
        type="text"
        value={quizCode}
        onChange={e => setQuizCode(e.target.value)}
        placeholder="Vul je quiz wachtwoord in"
        className="w-72 h-12 px-4 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-custom focus:ring-none block  p-2.5 focus-visible:outline-none"
      />
      <button onClick={handleJoin} className="w-72 h-14 text-lg text-white bg-blue-500  hover:bg-blue-600 rounded-custom active:scale-95 transition-transform transform duration-200 ">
        Ga naar quiz
      </button>

    </div>
    <Link to="/login">
          <button className="absolute top-4 right-4 text-lg text-white bg-blue-500  hover:bg-blue-600 p-2 rounded-custom">
          Login
        </button>
    </Link>
        </div>
  );
}

export default JoinQuiz;