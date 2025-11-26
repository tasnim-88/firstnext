"use client";

import React from 'react'

export default function BackButton() {
    return (
        <div>
            <button
                className="px-5 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition"
                onClick={() => history.back()}
            >
                ← Back to List
            </button>
        </div>
    )
}
