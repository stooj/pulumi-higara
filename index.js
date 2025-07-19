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

const blogRepo = new github.Repository("stooj-dot-org", {
    description: "Stoo's website",
    name: "stooj-dot-org",
}, {
   retainOnDelete: true
});

const nixvimRepo = new github.Repository("nixvim-config", {
    description: "Stoo's nixvim configuration",
    name: "nixvim-config",
}, {
   retainOnDelete: true
});

exports.pulumiRepo = pulumiRepo.name
exports.nixRepo = nixRepo.name
exports.blogRepo = blogRepo.name
exports.nixvimRepo = nixvimRepo.name
