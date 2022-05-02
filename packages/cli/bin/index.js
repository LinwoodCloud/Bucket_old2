#!/usr/bin/env node
import { Command } from 'commander';
const program = new Command();
// Example of subcommands which are implemented as stand-alone executable files.
//
// When `.command()` is invoked with a description argument,
// this tells Commander that you're going to use a stand-alone executable for the subcommand.
//
// Only `install` and `list` are implemented, see pm-install and pm-list.js
program
    .name('bucket-cli')
    .version('0.0.1')
    .description('Bucket CLI to manage assets in buckets and build a static library')
    .command('check', 'Check the status of a bucket', { executableFile: "check" });
program.parse(process.argv);
