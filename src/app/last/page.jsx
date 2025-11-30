import AnimatedButton from "@/components/AnimatedButton/AnimatedButton";
import GridFlex from "@/components/GridFlex/GridFlex";

export default function LastPage() {
  return (
    <div className="flex flex-col items-center space-y-6  mt-30">
      <AnimatedButton
        text="Sahib"
        href="/#"
        className=""
        gradient="from-red-500 via-red-600 to-red-700"
      />

      <AnimatedButton
        text="Hasib"
        href="/#"
        className=""
        bgColor="bg-green-500"
        gradient="from-black via-gray-900 to-gray-800"
      />

      <GridFlex />
    </div>
  );
}
