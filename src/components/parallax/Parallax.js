import ParallaxText from './ParallaxText'
export default function Parallax({text}) {
  return (
    <>
      <ParallaxText baseVelocity={5}>{text}</ParallaxText>
      {/* <ParallaxText baseVelocity={3}>{text}</ParallaxText> */}
    </>
  );
}
