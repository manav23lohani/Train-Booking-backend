import { addTrain } from './admin.repo';

export const addTrainService = async (trainName: string, startStation: string, endStation: string, numberOfSeats: number) => {
    return await addTrain(trainName, startStation, endStation, numberOfSeats);
};
