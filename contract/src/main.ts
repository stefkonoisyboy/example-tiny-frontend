import { loadTinyFrontendClient } from "@tiny-frontend/client";
import React from "react";

import type exportedModule from "../../app/lib/index";
import { tinyFrontendName, version } from "../package.json";

export type ExampleTinyFrontendType = typeof exportedModule;

export const loadExampleTinyFrontendClient = async (
  tinyApiEndpoint: string
): Promise<ExampleTinyFrontendType> =>
  await loadTinyFrontendClient<ExampleTinyFrontendType>({
    tinyApiEndpoint,
    name: tinyFrontendName,
    contractVersion: version,
    dependenciesMap: {
      react: React,
    },
    loadingOptions: {
      cacheTtlInMs: 0,
    },
  });
