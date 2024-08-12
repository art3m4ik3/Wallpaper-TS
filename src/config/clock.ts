interface ClockConfig {
    colors: {
        background: string;
        text: string;
        accent: string;
        highlight: string;
        highlightType: string;
    };
    font: {
        family: string;
        size: string;
    };
    timeFormat: {
        hour24: boolean;
        showSeconds: boolean;
    };
    showDate: boolean;
    showDayOfWeek: boolean;
    updateInterval: number;
}

const clockConfig: ClockConfig = {
    colors: {
        background: "#1e1e1e",
        text: "#4ec9b0",
        accent: "#ce723b",
        highlight: "#c78ddf",
        highlightType: "#f1cb6b",
    },

    font: {
        family: "monospace",
        size: "24px",
    },

    timeFormat: {
        hour24: true,
        showSeconds: true,
    },

    showDate: true,
    showDayOfWeek: false,

    updateInterval: 1000,
};

export default clockConfig;
