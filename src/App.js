import avatar from "./avatar.webp";
import "./App.css";
import "./index.css";
const skills = [
  {
    name: "HTML",
    level: "advanced",
    color: "#67e8f9",
  },
  {
    name: "CSS",
    level: "intermediate",
    color: "#f87171",
  },

  {
    name: "JavaScript",
    level: "intermediate",
    color: "#fdba74",
  },
  {
    name: "React",
    level: "beginner",
    color: "#60a5fa",
  },
  {
    name: "Git and GitHub",
    level: "beginner",
    color: "#a3e635",
  },
  {
    name: "Java",
    level: "beginner",
    color: "#bfdbfe",
  },
  {
    name: "MySQL",
    level: "beginner",
    color: "#c084fc",
  },
  {
    name: "C++",
    level: "beginner",
    color: "#818cf8",
  },
];

function App() {
  return (
    <>
      <div className="whole-card">
        <Card />
      </div>
    </>
  );
}

function Card() {
  return (
    <>
      <div className="card-info">
        <img src={avatar} alt="avatar" />
        <h1>Maša Žagar</h1>
        <p>
          I am a front end developer currently diving into React. I have
          knowledge of HTML, CSS and JavaScript. Besides that I have also made
          projects in Java and C++.
        </p>
      </div>
      <Skill />
    </>
  );
}

function Skill() {
  return (
    <div className="skills">
      {skills.map((skill) => {
        return (
          <div className="skill-blobs" style={{ backgroundColor: skill.color }}>
            <p key={skill.id}>{skill.name}</p>
            <p>
              {skill.level === "beginner" && <p>👶</p>}
              {skill.level === "intermediate" && <p>👍</p>}
              {skill.level === "advanced" && <p>💪</p>}{" "}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
