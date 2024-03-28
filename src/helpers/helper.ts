import { create } from "zustand";

export const COURSES = ['CPRG250', 'CPRG320', 'CPSY200', 'ABCD123', 'ABCD124', 'ABEEF22', 'CPRG123'] as const
export const WEEK = ['M', 'Tues', 'W', 'Thurs', 'F', 'Sat', 'Sun'] as const

export const times: string[] = [] as const;

export const dayMappings: Record<typeof WEEK[number], string> = {
    'M': "Monday",
    'Tues': "Tuesday",
    'W': "Wednesday",
    'Thurs': "Thursday",
    'F': "Friday",
    'Sat': "Saturday",
    'Sun': "Sunday"
};

for (let i = 0; i < 24; i++) {
    const beginTime = `${i.toString().padStart(2, "0")}:00`;
    const endTime = `${(i + 1).toString().padStart(2, "0")}:00`;
    times.push(`${beginTime} - ${endTime}`);
}

interface ScheduleInterface {
    course: typeof COURSES[number],
    timeSlot: string,
    daySlot: typeof WEEK[number]
}

export const useCurrCourses = create<{
    CurrCourses: ScheduleInterface[];
    setCurrCourses: (currCourses: ScheduleInterface[]) => void;
}>((set) => ({
    CurrCourses: [

    ],
    setCurrCourses: (courses) =>
        set({ CurrCourses: courses }),
}));

export function addToCurrCourses({ course, timeSlot, daySlot }: ScheduleInterface) {

    const { CurrCourses, setCurrCourses } = useCurrCourses.getState();

    // Create a new course object
    const newCourse: ScheduleInterface = { course, timeSlot, daySlot };

    // Update the state with the new course added
    setCurrCourses([...CurrCourses, newCourse]);
}

export function dropCourse({ course, timeSlot, daySlot }: ScheduleInterface) {

    const { CurrCourses, setCurrCourses } = useCurrCourses.getState();

    const newCourses = CurrCourses.filter(currCourse => currCourse.course !== course && currCourse.daySlot !== daySlot && currCourse.timeSlot !== timeSlot)

    setCurrCourses(newCourses);
}