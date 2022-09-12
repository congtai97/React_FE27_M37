import { useState } from "react";

export const Todolist = () => {
  // const storgeJobs = JSON.parse(localStorage.getItem('jobs'));

  const [job, setJob] = useState("");
  // const [jobs, setJobs] = useState(storgeJobs ?? [])
  const [jobs, setJobs] = useState(() => {
    const storgeJobs = JSON.parse(localStorage.getItem("jobs"));
    return storgeJobs ?? [];
  });

  const handleSubmit = () => {
    setJobs((prev) => {
      const newJobs = [...prev, job];

      //Save to Local Storge
      const jsonJobs = JSON.stringify(newJobs);
      localStorage.setItem("jobs", jsonJobs);
      return newJobs;
    });
    setJob("");
  };

  return (
    <div style={{ padding: 32 }}>
      <input value={job} onChange={(e) => setJob(e.target.value)} />
      <button onClick={handleSubmit}>Add</button>

      <ul>
        {jobs.map((job, index) => (
          <li key={index}>{job}</li>
        ))}
      </ul>
    </div>
  );
};
