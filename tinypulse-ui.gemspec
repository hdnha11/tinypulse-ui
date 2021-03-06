# coding: utf-8
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'tinypulse-ui/version'

Gem::Specification.new do |spec|
  spec.name          = "tinypulse-ui"
  spec.version       = TinypulseUi::VERSION
  spec.authors       = ["TINYpulse"]
  spec.email         = ["no@email.com"]

  spec.summary       = %q{TINYpulse Front-end framework}
  spec.description   = %q{TINYpulse Front-end framework}
  spec.homepage      = "https://github.com/hdnha11/tinypulse-ui"

  # Prevent pushing this gem to RubyGems.org by setting 'allowed_push_host', or
  # delete this section to allow pushing this gem to any host.
  if spec.respond_to?(:metadata)
    spec.metadata['allowed_push_host'] = "TODO: Set to 'http://mygemserver.com'"
  else
    raise "RubyGems 2.0 or newer is required to protect against public gem pushes."
  end

  spec.files         = `git ls-files -- {app}/* {LICENSE*,Rakefile,README*}`.split("\n")
  spec.bindir        = "exe"
  spec.executables   = spec.files.grep(%r{^exe/}) { |f| File.basename(f) }
  spec.require_paths = ["lib"]

  spec.add_development_dependency "bundler", "~> 1.11"
  spec.add_development_dependency "rake", "~> 10.0"
end
