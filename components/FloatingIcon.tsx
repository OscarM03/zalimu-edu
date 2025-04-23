"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    FiBookOpen,
    FiEdit,
    FiClipboard,
    FiUsers,
    FiFolder,
    FiCalendar,
    FiGlobe,
    FiAward,
    FiPenTool,
    FiFileText,
    FiActivity,
    FiBriefcase,
    FiBook,
    FiLayers,
    FiPaperclip,
} from "react-icons/fi";

import {
    FaChalkboardTeacher,
    FaGraduationCap,
    FaLaptopCode,
    FaFlask,
    FaRuler,
    FaBook,
    FaUserGraduate,
    FaSchool,
    FaPencilAlt,
    FaCode,
    FaProjectDiagram,
    FaTabletAlt,
    FaMicroscope,
    FaLanguage,
} from "react-icons/fa";

import {
    MdMenuBook,
    MdLibraryBooks,
    MdOutlineScience,
    MdOutlineSchool,
    MdOutlineHistoryEdu,
    MdOutlineComputer,
    MdOutlineCalculate,
    MdOutlineLightbulb,
    MdOutlineQuiz,
} from "react-icons/md";

import {
    BsPencil,
    BsBook,
    BsClipboardData,
    BsCalendarEvent,
} from "react-icons/bs";

export const icons = [
    { icon: FiBookOpen, x: 5, y: 10, delay: 0 },
    { icon: FiEdit, x: 15, y: 20, delay: 0.2 },
    { icon: FiClipboard, x: 25, y: 15, delay: 0.4 },
    { icon: FiUsers, x: 35, y: 25, delay: 0.6 },
    { icon: FiFolder, x: 45, y: 20, delay: 0.8 },
    { icon: FiCalendar, x: 55, y: 30, delay: 1 },
    { icon: FiGlobe, x: 65, y: 10, delay: 1.2 },
    { icon: FiAward, x: 75, y: 25, delay: 1.4 },
    { icon: FiPenTool, x: 85, y: 15, delay: 1.6 },
    { icon: FiFileText, x: 95, y: 20, delay: 1.8 },

    { icon: FaChalkboardTeacher, x: 10, y: 35, delay: 0.3 },
    { icon: FaGraduationCap, x: 20, y: 40, delay: 0.5 },
    { icon: FaLaptopCode, x: 30, y: 45, delay: 0.7 },
    { icon: FaFlask, x: 40, y: 35, delay: 0.9 },
    { icon: FaRuler, x: 50, y: 40, delay: 1.1 },
    { icon: FaBook, x: 60, y: 45, delay: 1.3 },
    { icon: FaUserGraduate, x: 70, y: 35, delay: 1.5 },
    { icon: FaSchool, x: 80, y: 40, delay: 1.7 },
    { icon: FaPencilAlt, x: 90, y: 35, delay: 1.9 },
    { icon: FaCode, x: 5, y: 50, delay: 0.1 },

    { icon: FaProjectDiagram, x: 15, y: 55, delay: 0.4 },
    { icon: FaTabletAlt, x: 25, y: 60, delay: 0.6 },
    { icon: FaMicroscope, x: 35, y: 50, delay: 0.8 },
    { icon: FaLanguage, x: 45, y: 55, delay: 1.0 },
    { icon: MdMenuBook, x: 55, y: 60, delay: 1.2 },
    { icon: MdLibraryBooks, x: 65, y: 50, delay: 1.4 },
    { icon: MdOutlineScience, x: 75, y: 55, delay: 1.6 },
    { icon: MdOutlineSchool, x: 85, y: 50, delay: 1.8 },
    { icon: MdOutlineHistoryEdu, x: 95, y: 55, delay: 2.0 },

    { icon: MdOutlineComputer, x: 10, y: 65, delay: 0.2 },
    { icon: MdOutlineCalculate, x: 20, y: 70, delay: 0.4 },
    { icon: MdOutlineLightbulb, x: 30, y: 75, delay: 0.6 },
    { icon: MdOutlineQuiz, x: 40, y: 65, delay: 0.8 },
    { icon: BsPencil, x: 50, y: 70, delay: 1.0 },
    { icon: BsBook, x: 60, y: 75, delay: 1.2 },
    { icon: BsClipboardData, x: 70, y: 65, delay: 1.4 },
    { icon: BsCalendarEvent, x: 80, y: 70, delay: 1.6 },

    { icon: FiActivity, x: 90, y: 75, delay: 1.8 },
    { icon: FiBriefcase, x: 5, y: 80, delay: 2.0 },
    { icon: FiBook, x: 15, y: 85, delay: 2.2 },
    { icon: FiLayers, x: 25, y: 80, delay: 2.4 },
    { icon: FiPaperclip, x: 35, y: 85, delay: 2.6 },
];

const FloatingIcon = () => {
    return (
        <div>
            {icons.map(({ icon: Icon, x, y, delay }, index) => {
                const amplitude = -5 - Math.floor(Math.random() * 5);
                return (
                    <motion.div
                        key={index}
                        style={{ top: `${y}%`, left: `${x}%` }}
                        initial={{ y: 0 }}
                        animate={{ y: [0, amplitude, 0] }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay,
                        }}
                        className="absolute text-white z-10"
                    >
                        <Icon className="drop-shadow-md" size={28}/>
                    </motion.div>
                );
            })}
        </div>
    );
};

export default FloatingIcon;
