"use strict";
const pulumi = require("@pulumi/pulumi");
const github = require("@pulumi/github")

const pulumiRepo = new github.Repository("pulumi-higara-repo", {
    description: "Repo for pulumi higara configuration",
    name: "pulumi-higara",
}, {
    retainOnDelete: true
});

const nixRepo = new github.Repository("nix-config", {
    description: "StooJ's NixOS configuration",
    name: "nix-config",
}, {
   retainOnDelete: true
});

exports.pulumiRepo = pulumiRepo.name
exports.nixRepo = nixRepo.name
