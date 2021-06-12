interface IProps {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

const List = (props: IProps) => {
  return (
    <div>
      <p>I am list</p>
    </div>
  );
};

export default List;
