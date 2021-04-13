/**
 *
 * @param {*} props
 * @returns
 */
export default function Main(props) {
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      {props.child}
    </div>
  );
}
