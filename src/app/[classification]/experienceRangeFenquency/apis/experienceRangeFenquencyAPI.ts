export const experienceRangeFenquencyAPI = {
  getExperienceRangeFenquencyAnalysis: async (
    classification: string,
    experienceMin: number | null,
    experienceMax: number | null,
  ) => {
    try {
      const response = await fetch(
        `/api/${classification}/experienceRangeFrequency`,
        {
          headers: {
            "Content-Type": "application/json",
            experienceMin: experienceMin ? experienceMin.toString() : "",
            experienceMax: experienceMax ? experienceMax.toString() : "",
          },
          next: { revalidate: 0 },
        },
      );

      if (!response.ok) {
        throw new Error("데이터를 가져오기를 실패했습니다.");
      }

      return await response.json();
    } catch (error) {
      return {
        data: [],
        count: 0,
      };
    }
  },
};
