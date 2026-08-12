import { motion, type Variants } from "framer-motion";

export function AnimationIntro({
    children,
    className,
    id
}: {
    children: React.ReactNode;
    className?: string;
    id?: string;
}) {

    const fadeIn: Variants = {
        
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                duration: 1.5,
                ease: "easeOut",
            },
        },
    };

    return (
        <motion.section
            id={id}
            className={className}
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            {children}
        </motion.section>
    );
}