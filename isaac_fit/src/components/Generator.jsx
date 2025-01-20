import SectionWrapper from "./SectionWrapper";
import { SCHEMES, WORKOUTS } from "../utils/swoldier";
import { useState } from "react";
import Button from "./Button";

function Header(props) {
  const { index, title, description, update, updateWorkout } = props;
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-center gap-2">
        <p className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400">
          {index}
        </p>
        <h4 className="text-xl sm:text-2xl md:text-3xl">{title}</h4>
      </div>
      <p className="text-sm sm:text-base mx-auto">{description}</p>
    </div>
  );
}

export default function Generator(props) {
  const [showModal, setShowModal] = useState(false);
  const {
    poison,
    setPoison,
    muscles,
    setMuscles,
    goal,
    setGoal,
    updateWorkout,
  } = props;

  function toggleModal() {
    setShowModal(!showModal);
  }

  function handleMuscleSelection(muscleGroup) {
    if (poison === "individual") {
      // For individual selection, toggle the muscle in the array
      setMuscles((prev) => {
        if (prev.includes(muscleGroup)) {
          return prev.filter((m) => m !== muscleGroup);
        } else {
          return [...prev, muscleGroup];
        }
      });
    } else {
      // For other types (bro_split, etc), select the whole group
      const selectedMuscles = WORKOUTS[poison][muscleGroup] || [];
      setMuscles(selectedMuscles);
    }
  }

  return (
    <SectionWrapper
      id={"generate"}
      header={"Generate your workout"}
      title={["It's", "Huge", "o'clock"]}
    >
      <Header
        index={"01"}
        title={"Pick your poison"}
        description={"Select the workout you wish"}
      />
      <div className="grid grid-cols-2 sm:grid-cols-4">
        {Object.keys(WORKOUTS).map((type, typeIndex) => {
          return (
            <button
              onClick={() => {
                setPoison(type);
              }}
              className={
                "bg-slate-950 border  duration-200 hover:border-blue-600 py-3 rounded-lg " +
                (type === poison ? "border-blue-600" : "border-blue-400")
              }
              key={typeIndex}
            >
              <p className="capitalize">{type.replaceAll("_", "")}</p>
            </button>
          );
        })}
      </div>
      <Header
        index={"02"}
        title={"Lock on targets"}
        description={"Select the muscles judged for annihilation"}
      />
      <div className="bg-slate-950 border border-solid border-blue-400 rounded-lg flex flex-col">
        <button
          onClick={toggleModal}
          className="relative  p-3 flex items-center justify-center"
        >
          <p>Select muscle groups</p>
          <i className="fa-solid absolute right-3 top-1/2 -translate-y-1/2 fa-caret-down"></i>
        </button>
        {showModal && (
          <div className="flex flex-col px-3 pb-3">
            {(poison === "individual"
              ? WORKOUTS[poison]
              : Object.keys(WORKOUTS[poison])
            ).map((muscleGroup, muscleGroupIndex) => {
              const isSelected =
                poison === "individual"
                  ? muscles.includes(muscleGroup)
                  : JSON.stringify(muscles) ===
                    JSON.stringify(WORKOUTS[poison][muscleGroup]);
              return (
                <button
                  key={muscleGroupIndex}
                  onClick={() => handleMuscleSelection(muscleGroup)}
                  className={`text-left p-2 hover:bg-slate-800 rounded ${
                    isSelected ? "bg-slate-800 text-blue-400" : ""
                  }`}
                >
                  <p className="capitalize">
                    {muscleGroup.replaceAll("_", " ")}
                  </p>
                </button>
              );
            })}
          </div>
        )}
      </div>
      {muscles.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-2">
          {muscles.map((muscle, index) => (
            <span
              key={index}
              className="bg-blue-600 text-sm px-2 py-1 rounded-full capitalize"
            >
              {muscle.replaceAll("_", " ")}
            </span>
          ))}
        </div>
      )}
      <Header
        index={"03"}
        title={"Become Juggernault"}
        description={"Select your ultimate objective"}
      />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
          return (
            <button
              onClick={() => {
                setGoal(scheme);
              }}
              className={
                "bg-slate-950 border  duration-200 hover:border-blue-600 py-3 rounded-lg " +
                (scheme === goal ? "border-blue-600" : "border-blue-400")
              }
              key={schemeIndex}
            >
              <p className="capitalize">{scheme.replaceAll("_", "")}</p>
            </button>
          );
        })}
      </div>
      <Button func={updateWorkout} text={"Formualate"}></Button>
    </SectionWrapper>
  );
}
