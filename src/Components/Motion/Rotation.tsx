import { motion } from "framer-motion";

interface IRotatingComponentProps {
  theme: string;
}

export const RotatingComponent = ({ theme }: IRotatingComponentProps) => {
  return (
    <motion.div
      animate={{ rotate: [0, 360] }}
      transition={{ duration: 20, repeat: Infinity, repeatType: "loop" }}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "80px",
        height: "80px",
      }}
    >
      {theme === "light" ? (
        <img src="https://i.ibb.co/pyJS96w/rotation.png" alt="Logo" />
      ) : (
        <img src="https://i.ibb.co/n3WH23V/rotation-light.png" alt="Logo" />
      )}
    </motion.div>
  );
};
