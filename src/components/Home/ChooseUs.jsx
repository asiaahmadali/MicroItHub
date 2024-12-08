import { useEffect, useState } from 'react';

function ChooseUs() {
  const [teamMembersProgress, setTeamMembersProgress] = useState(0);
  const [completedProjectsProgress, setCompletedProjectsProgress] = useState(0);
  const [winningAwardsProgress, setWinningAwardsProgress] = useState(0);

  useEffect(() => {
    const animateProgress = (targetValue, setProgress) => {
      let currentValue = 0;
      const interval = setInterval(() => {
        if (currentValue < targetValue) {
          currentValue++;
          setProgress(currentValue);
        } else {
          clearInterval(interval);
        }
      }, 30);
    };

    animateProgress(96, setTeamMembersProgress);
    animateProgress(95, setCompletedProjectsProgress);
    animateProgress(80, setWinningAwardsProgress);
  }, []);

  return (
    <>
      <div className="md:p-[50px] p-[20px] mt-[40px]">
        <div className="flex justify-between md:flex-row flex-col gap-[20px]">
          <div>
            <p className="text-blue-500 font-semibold text-[16px] mb-[10px]">WHY CHOOSE US</p>
            <h1
              data-aos="fade-right"
              className="md:text-3xl text-2xl leading-[30px] md:leading-[40px] w-[auto] md:w-[500px] text-blue-950 font-bold"
            >
              Microithub: Empowering Your Business with Leading-Edge Software and Expertise in Digital Excellence
            </h1>
          </div>

          {/* Circles div */}
          <div className="flex gap-[20px]">
            {/* Circle 1 */}
            <div
              data-aos="fade-up"
              className="p-[20px] md:w-[170px] w-[120px] h-[120px] gap-[5px] md:h-[170px] flex flex-col rounded-full border border-blue-500 items-center justify-center relative"
              style={{
                background: `conic-gradient(#1E40AF ${teamMembersProgress * 3.6}deg, #e0e0e0 0deg)`,
              }}
            >
              {/* Number in the center */}
              <h1 className="md:text-5xl text-3xl text-white font-bold">{teamMembersProgress}%</h1>
              <p className="md:text-[16px] text-[14px] text-white text-center">Team Members</p>
            </div>

            {/* Circle 2 */}
            <div
              data-aos="fade-down"
              className="p-[10px] md:w-[170px] w-[120px] h-[120px] gap-[5px] md:h-[170px] flex flex-col rounded-full border border-blue-500 items-center justify-center relative"
              style={{
                background: `conic-gradient(#1E40AF ${completedProjectsProgress * 3.6}deg, #e0e0e0 0deg)`,
              }}
            >
              {/* Number in the center */}
              <h1 className="md:text-5xl text-3xl text-white font-bold">{completedProjectsProgress}%</h1>
              <p className="md:text-[16px] text-[14px] text-white text-center">Complete Projects</p>
            </div>

            {/* Circle 3 */}
            <div
              data-aos="fade-up"
              className="p-[10px] md:w-[170px] w-[120px] h-[120px] gap-[5px] md:h-[170px] flex flex-col rounded-full border border-blue-500 items-center justify-center relative"
              style={{
                background: `conic-gradient(#1E40AF ${winningAwardsProgress * 3.6}deg, #e0e0e0 0deg)`,
              }}
            >
              {/* Number in the center */}
              <h1 className="md:text-5xl text-3xl text-white font-bold">{winningAwardsProgress}%</h1>
              <p className="md:text-[16px] text-[14px] text-white text-center">Winning Awards</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChooseUs;
