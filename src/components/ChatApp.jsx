import { useState } from "react";
import ComputerOutput from "./ComputerOutput";
import UserOutput from "./UserOutput";
import InputAndConfirm from "./InputAndConfirm";
import psychologicalReplies from "./data";

export default function ChatApp() {
  const [data, setData] = useState("");
  const [value, setValue] = useState("");

  const handleValueChange = (event) => {
    setValue(event.target.value);
  };

  let randomIndex = Math.floor(Math.random() * 15);

  const handleSubmit = () => {
    const lowercaseValue = value.toLowerCase();

    // Mapping of keywords to reply IDs
    const keywordMapping = {
      hello: 16,
      help: 5,
      "deep breaths": 2,
      journaling: 3,
      "self-care": 4,
      mindfulness: 6,
      joy: 7,
      goal: 8,
      trust: 9,
      difficult: 10,
      believe: 11,
      comfort: 12,
      relax: 13,
      hard: 14,
      depressed: 15,
    };

    for (const keyword in keywordMapping) {
      if (lowercaseValue.includes(keyword)) {
        setData(
          psychologicalReplies.find(
            (reply) => reply.id === keywordMapping[keyword]
          ).content
        );
        setValue("");
        return;
      }
    }

    setData(
      "Sorry, I'm not sure how to respond to that. Use words like trust, hard, help or believe"
    );
    setValue("");
  };

  return (
    <>
      <div className="chat-app">
        <h1>
          Therapist<span className="app-version"> V.1.0</span>
        </h1>
        <ComputerOutput data={data} />
        <UserOutput value={value} />
        <InputAndConfirm
          value={value}
          handleValueChange={handleValueChange}
          handleSubmit={handleSubmit}
        />
      </div>
    </>
  );
}
