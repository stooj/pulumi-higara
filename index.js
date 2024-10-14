"use strict";
const pulumi = require("@pulumi/pulumi");
const github = require("@pulumi/github")

const pulumiRepo = new github.Repository("pulumi-higara-repo", {
    description: "Repo for pulumi higara configuration",
    name: "pulumi-higara",
}, {
    retainOnDelete: true
});

exports.pulumiRepo = pulumiRepo.name
