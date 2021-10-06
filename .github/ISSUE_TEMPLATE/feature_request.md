name: Feature Request
description: File a feature request
title: "[Feat]: "
labels: []
assignees: []
body:
  - type: markdown
    attributes:
      value: |
        Thanks for taking the time to fill out this feature request!

  - type: textarea
    id: detailed-description
    attributes:
      label: Detailed Description
      description: Add a detailed description of the feature request.
      placeholder: A detailed description of the feature request.
      value: "I found this thing in this project where ... can be improved and I suggest adding ..."
    validations:
      required: true

  - type: checkboxes
    id: code-of-conduct
    attributes:
      label: Code of Conduct
      description: By submitting this issue, you agree to follow our [Code of Conduct](https://github.com/web3community/devprotocol.xyz/blob/main/code_of_conduct.md)
      options:
        - label: I agree to follow this project's Code of Conduct
          required: true
    validations:
        required: true

  - type: textarea
    attributes:
        label: Anything else?
        description: |
          Links? References? Anything that will give us more context about the feature request!
      
          Tip: You can attach images or log files by clicking this area to highlight it and then dragging files in.
    validations:
        required: false
