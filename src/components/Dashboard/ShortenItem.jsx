import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { FaExternalLinkAlt, FaRegCalendarAlt } from "react-icons/fa";
import { IoCopy } from "react-icons/io5";
import { LiaCheckSolid } from "react-icons/lia";
import { MdAnalytics, MdOutlineAdsClick } from "react-icons/md";
import { Hourglass } from "react-loader-spinner";

import api from "../../api/api";
import { useStoreContext } from "../../contextApi/ContextApi";
import Graph from "./Graph";

const ShortenItem = ({
    originalUrl,
    shortUrl,
    clickCount,
    createdDate,
}) => {

    const { token } = useStoreContext();

    const [isCopied, setIsCopied] = useState(false);
    const [analyticToggle, setAnalyticToggle] = useState(false);
    const [loader, setLoader] = useState(false);
    const [selectedUrl, setSelectedUrl] = useState("");
    const [analyticsData, setAnalyticsData] = useState([]);

    // Backend URL
    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    // For displaying "localhost:8080"
    const subDomain = backendUrl.replace(/^https?:\/\//, "");

    const analyticsHandler = (shortUrl) => {

        if (!analyticToggle) {
            setSelectedUrl(shortUrl);
        }

        setAnalyticToggle(!analyticToggle);

    };

    const fetchAnalytics = async () => {

        setLoader(true);

        try {

            const startDate = dayjs()
                .startOf("year")
                .format("YYYY-MM-DDTHH:mm:ss");

            const endDate = dayjs()
                .endOf("day")
                .format("YYYY-MM-DDTHH:mm:ss");

            const { data } = await api.get(
                `/api/urls/analytics/${selectedUrl}`,
                {
                    params: {
                        startDate,
                        endDate,
                    },
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            setAnalyticsData(data);

        } catch (error) {

            console.error(error);

        } finally {

            setLoader(false);
            setSelectedUrl("");

        }
    };

    useEffect(() => {

        if (selectedUrl) {
            fetchAnalytics();
        }

    }, [selectedUrl]);

    return (
        <div className="bg-slate-100 shadow-lg border border-dotted border-slate-500 px-6 py-4 rounded-md">

            <div className="flex sm:flex-row flex-col justify-between gap-5">

                <div className="flex-1">

                    {/* Short URL */}

                    <div className="flex items-center gap-2">

                        <a
                            href={`${backendUrl}/s/${shortUrl}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-linkColor text-lg font-semibold"
                        >
                            {subDomain}/{shortUrl}
                        </a>

                        <FaExternalLinkAlt className="text-linkColor" />

                    </div>

                    {/* Original URL */}

                    <div className="mt-2">

                        <p className="text-slate-700 break-all">
                            {originalUrl}
                        </p>

                    </div>

                    {/* Stats */}

                    <div className="flex gap-8 mt-6">

                        <div className="flex items-center gap-2 text-green-700 font-semibold">

                            <MdOutlineAdsClick size={22} />

                            <span>{clickCount}</span>

                            <span>
                                {clickCount === 1 ? "Click" : "Clicks"}
                            </span>

                        </div>

                        <div className="flex items-center gap-2 text-slate-700 font-semibold">

                            <FaRegCalendarAlt />

                            <span>
                                {dayjs(createdDate).format("MMM DD, YYYY")}
                            </span>

                        </div>

                    </div>

                </div>

                {/* Buttons */}

                <div className="flex gap-4 items-center">

                    <CopyToClipboard
                        text={`${backendUrl}/s/${shortUrl}`}
                        onCopy={() => setIsCopied(true)}
                    >

                        <button className="bg-btnColor text-white px-6 py-2 rounded-md shadow-md flex gap-2 items-center">

                            {isCopied ? "Copied" : "Copy"}

                            {isCopied
                                ? <LiaCheckSolid />
                                : <IoCopy />}

                        </button>

                    </CopyToClipboard>

                    <button
                        onClick={() => analyticsHandler(shortUrl)}
                        className="bg-rose-700 text-white px-6 py-2 rounded-md shadow-md flex gap-2 items-center"
                    >

                        Analytics

                        <MdAnalytics />

                    </button>

                </div>

            </div>

            {/* Analytics */}

            {analyticToggle && (

                <div className="border-t mt-5 min-h-[380px] relative">

                    {loader ? (

                        <div className="flex justify-center items-center h-[350px]">

                            <Hourglass
                                visible
                                height="50"
                                width="50"
                                colors={["#306cce", "#72a1ed"]}
                            />

                        </div>

                    ) : (

                        <>

                            {analyticsData.length === 0 && (

                                <div className="absolute inset-0 flex flex-col justify-center items-center">

                                    <h2 className="text-2xl font-bold">
                                        No Analytics Available
                                    </h2>

                                    <p className="text-slate-600">
                                        Share your short URL to start collecting analytics.
                                    </p>

                                </div>

                            )}

                            <Graph graphData={analyticsData} />

                        </>

                    )}

                </div>

            )}

        </div>
    );

};

export default ShortenItem;