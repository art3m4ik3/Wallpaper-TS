import React, { useState, useEffect, CSSProperties } from "react";
import clockConfig from "../config/clock";

const ClockComponent: React.FC = () => {
    const [time, setTime] = useState<Date | null>(null);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        const timer = setInterval(
            () => setTime(new Date()),
            clockConfig.updateInterval
        );
        return () => clearInterval(timer);
    }, []);

    const formatTime = (date: Date): string => {
        const options: Intl.DateTimeFormatOptions = {
            hour: "numeric",
            minute: "numeric",
            ...(clockConfig.timeFormat.showSeconds && { second: "numeric" }),
            hour12: !clockConfig.timeFormat.hour24,
        };
        return new Intl.DateTimeFormat("en-US", options).format(date);
    };

    const formatDate = (date: Date): string => {
        const options: Intl.DateTimeFormatOptions = {
            year: "numeric",
            month: "long",
            day: "numeric",
            ...(clockConfig.showDayOfWeek && { weekday: "long" as const }),
        };
        return new Intl.DateTimeFormat("en-US", options).format(date);
    };

    const containerStyle: CSSProperties = {
        backgroundColor: clockConfig.colors.background,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        width: "100%",
        margin: 0,
        padding: 0,
        fontFamily: clockConfig.font.family,
        fontSize: clockConfig.font.size,
        color: clockConfig.colors.text,
    };

    const codeStyle: CSSProperties = {
        display: "block",
        textAlign: "left",
        padding: "20px",
        borderRadius: "10px",
        backgroundColor: "rgba(0, 0, 0, 0.3)",
    };

    const lineStyle: CSSProperties = {
        display: "block",
        marginLeft: "20px",
    };

    const valueStyle: CSSProperties = {
        color: clockConfig.colors.accent,
    };

    const highlight: CSSProperties = {
        color: clockConfig.colors.highlight,
    };

    const highlightType: CSSProperties = {
        color: clockConfig.colors.highlightType,
    };

    const clockData: Record<string, string> = time
        ? {
              time: formatTime(time),
              ...(clockConfig.showDate && { date: formatDate(time) }),
          }
        : { loading: "Clock is initializing..." };

    return (
        <div style={containerStyle}>
            <pre style={codeStyle}>
                <code>
                    const <span style={highlight}>clock</span>:{" "}
                    <span style={highlightType}>object</span> = {"{"}
                </code>
                {Object.entries(clockData).map(([key, value]) => (
                    <code key={key} style={lineStyle}>
                        {key}: <span style={valueStyle}>"{value}"</span>
                        {","}
                    </code>
                ))}
                <code>{"}"}</code>
            </pre>
        </div>
    );
};

export default ClockComponent;
