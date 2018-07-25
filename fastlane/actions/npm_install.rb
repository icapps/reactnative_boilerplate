module Fastlane
  module Actions
    module SharedValues
      NPM_INSTALL_CUSTOM_VALUE = :NPM_INSTALL_CUSTOM_VALUE
    end

    class NpmInstallAction < Action
      def self.run(params)
        # fastlane will take care of reading in the parameter and fetching the environment variable:
        UI.message "Update NPM"

        sh "npm install"

        # Actions.lane_context[SharedValues::NPM_INSTALL_CUSTOM_VALUE] = "my_val"
      end
    end
  end
end
