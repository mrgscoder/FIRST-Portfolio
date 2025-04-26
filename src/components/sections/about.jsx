import {RevealOnScroll} from"../RevealOnScroll";

export const About = () => {
  
    return (
      <section
        id="about"
        className="min-h-screen flex items-center justify-center py-20"
      >
        <RevealOnScroll>
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
              {" "}
              About Me
            </h2>
  
            <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
              <p className="text-gray-300 mb-6">
              I’m a student currently learning Python and exploring the basics of programming. I’m especially interested in how machine learning and AI work, and I enjoy discovering how code can help machines learn.
              </p>
            </div>
  
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>
                    <strong> B.E. in Computer Science </strong> - Maharshi Dayanand University
                    (2023-2027)
                  </li>
                  <li>
                    Relevant Coursework: Workshop on Data Science, by IBM online 
                    Workshop on Machine Leaning, by Techobytes at IIT Patna
                  </li>
                </ul>
              </div>
              <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
                <div className="space-y-4 text-gray-300">
  
                  <div>
                    <h4 className="font-semibold">
                      {" "}
                      3 months Internship at IBM (2024){" "}
                    </h4>
                    <p>
                      Researched on Effects of Earthquake in Turkey(2023)
                      and <span className="space-y-4 bg-gradient-to-r from-green-500 to-cyan-400 text-transparent">UNOCHA</span> helps to them.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </RevealOnScroll>
      </section>
    );
  };