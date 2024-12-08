function Test()
{ 
    const [progress96, setProgress96] = useState(0);
    const [progress95, setProgress95] = useState(0);
    const [progress80, setProgress80] = useState(0);
  
     // Update progress gradually
  useEffect(() => {
    const interval96 = setInterval(() => {
      setProgress96((oldProgress) => {
        if (oldProgress < 96) return oldProgress + 1;
        clearInterval(interval96);
        return 96;
      });
    }, 20);

    const interval95 = setInterval(() => {
        setProgress95((oldProgress) => {
          if (oldProgress < 95) return oldProgress + 1;
          clearInterval(interval95);
          return 95;
        });
      }, 20);

      const interval80 = setInterval(() => {
        setProgress80((oldProgress) => {
          if (oldProgress < 80) return oldProgress + 1;
          clearInterval(interval80);
          return 80;
        });
      }, 20);
    }, []);

    // Function to create the circle's stroke dasharray and dashoffset
  const getCircleProps = (percentage) => {
    const radius = 60; // Increased radius for a bigger circle
    const stroke = 20; // Increased stroke width for thicker blue ring
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;
    return {
        strokeDasharray: circumference,
        strokeDashoffset: offset,
        strokeWidth: stroke,
      };
    };

    
    return<>
    <div className="flex">
            {/* Circle 96% */}
            <div className="relative flex flex-col items-center justify-center">
              <svg width="200" height="200" className="transform rotate-90 ">
                {/* Background ring (gray) */}
                <circle
                  cx="100"
                  cy="100"
                  r="60"
                  stroke="#e2e8f0" // Light gray background circle
                  strokeWidth="8" // Thin background ring
                  fill="none"
                />
                {/* Blue progress ring */}
                <circle
                  cx="100"
                  cy="100"
                  r="60"
                  stroke="#3b82f6" // Blue color for progress
                  fill="none"
                  strokeWidth="12" // Thicker blue ring
                  strokeLinecap="round"
                  style={{
                    strokeDasharray: getCircleProps(progress96).strokeDasharray,
                    strokeDashoffset: getCircleProps(progress96).strokeDashoffset,
                  }}
                />
              </svg>
              <div className="absolute p-[60px] flex flex-col items-center justify-center m-[5px] md:m-[20px] w-full h-full">
                <h1 className="text-blue-950 font-semibold text-3xl">{progress96}%</h1>
                <p className="text-blue-950 text-[18px] mt-2 ">Team Members</p>
              </div>
            </div>

            {/* Circle 95% */}
            <div className="relative flex flex-col items-center justify-center">
              <svg width="200" height="200" className="transform rotate-90">
                {/* Background ring (gray) */}
                <circle
                  cx="100"
                  cy="100"
                  r="60"
                  stroke="#e2e8f0" // Light gray background circle
                  strokeWidth="8" // Thin background ring
                  fill="none"
                />
                {/* Blue progress ring */}
                <circle
                  cx="100"
                  cy="100"
                  r="60"
                  stroke="#3b82f6" // Blue color for progress
                  fill="none"
                  strokeWidth="12" // Thicker blue ring
                  strokeLinecap="round"
                  style={{
                    strokeDasharray: getCircleProps(progress95).strokeDasharray,
                    strokeDashoffset: getCircleProps(progress95).strokeDashoffset,
                  }}
                />
              </svg>
              <div className="absolute flex flex-col p-[60px] items-center justify-center w-full h-full">
                <h1 className="text-blue-950 font-semibold text-3xl">{progress95}%</h1>
                <p className="text-blue-950 text-[18px] mt-2">Complete Project</p>
              </div>
            </div>

            {/* Circle 80% */}
            <div className="relative flex flex-col items-center justify-center">
              <svg width="200" height="200" className="transform rotate-90">
                {/* Background ring (gray) */}
                <circle
                  cx="100"
                  cy="100"
                  r="60"
                  stroke="#e2e8f0" // Light gray background circle
                  strokeWidth="8" // Thin background ring
                  fill="none"
                />
                {/* Blue progress ring */}
                <circle
                  cx="100"
                  cy="100"
                  r="60"
                  stroke="#3b82f6" // Blue color for progress
                  fill="none"
                  strokeWidth="12" // Thicker blue ring
                  strokeLinecap="round"
                  style={{
                    strokeDasharray: getCircleProps(progress80).strokeDasharray,
                    strokeDashoffset: getCircleProps(progress80).strokeDashoffset,
                  }}
                />
              </svg>
              <div className="absolute flex flex-col p-[60px] items-center justify-center w-full h-full">
                <h1 className="text-blue-950 font-semibold text-3xl">{progress80}%</h1>
                <p className="text-blue-950 text-[18px] mt-2">Winning Awards</p>
              </div>
            </div>
          </div>
    </>
}


export default Test ;