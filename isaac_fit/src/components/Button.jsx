export default function Button(props) {
  const { text, func } = props;
  return (
    <div>
      <button
        onClick={func}
        className="px-8 mx-auto py-4 rounded-md border-[2px] border-blue-400 border-solid blueShadow duration-200"
      >
        <p>{text}</p>
      </button>
    </div>
  );
}
