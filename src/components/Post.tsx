type PostProps = {
  id: number;
  title: string;
  toggle: "clossed" | "open";
};

export const Post = ({ id, title, toggle }: PostProps) => {
  return (
    <>
      <div className="p-6 m-6">
        <p className="text-2xl font-bold">Post Component Here</p>
        <p className="text-lg font-semibold">{title}</p>
        <p className="text-lg font-semibold">{id}</p>
        <p className="text-lg font-semibold">{toggle}</p>
      </div>
    </>
  );
};
